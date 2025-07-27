package main

import (
	"context"
	"fmt"
	"log"
	"net/mail"
	"os"

	"github.com/DanielJVM/Signor.io/passwordHashing"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

type User struct {
	ID                int    `json:"id"`
	Email             string `json:"email"`
	FamilyName        string `json:"family_name"`
	GivenName         string `json:"given_name"`
	MiddleName        string `json:"middle_name"`
	AccountType       string `json:"account_type"`
	Password          string `json:"password"` // Hashed before sent to Database
	CreatedAt         string `json:"created_at"`
	UpdatedAt         string `json:"updated_at"`
	IsOnline          bool   `json:"is_online"`
	LastLoginAt       string `json:"last_login_at"`
	IsActive          bool   `json:"is_active"`
	IsPLDLAuthorized  bool   `json:"is_pldl_authorized"`
	ProfilePictureURL string `json:"profile_picture_url"`
	OAuthProvider     string `json:"oauth_provider"`
	OAuthID           string `json:"oauth_id"`
	OAuthAccessToken  string `json:"oauth_access_token"`
	OAuthRefreshToken string `json:"oauth_refresh_token"`
	OAuthExpiresAt    string `json:"oauth_expires_at"`
}

type UserLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
	IsActive bool   `json:"is_active"`
}

type AuditLog struct {
	ID              int    `json:"id"`
	Timestamp       string `json:"timestamp"`
	Action          string `json:"action"`
	UserID          int    `json:"user_id"`
	Status          string `json:"status"`
	OperationType   string `json:"operation_type"`
	TableName       string `json:"table_name"`
	RecordID        string `json:"record_id"`
	ColumnName      string `json:"column_name"`
	OldValue        string `json:"old_value"`
	NewValue        string `json:"new_value"`
	SessionID       string `json:"session_id"`
	RequestID       string `json:"request_id"`
	UserIP          string `json:"user_ip"`
	ApplicationName string `json:"application_name"`
}

type Session struct {
	ID         int    `json:"id"`
	UserID     int    `json:"user_id"` // FK
	Token      string `json:"token"`
	CreatedAt  string `json:"created_at"`
	UpdatedAt  string `json:"updated_at"`
	ExpiresAt  string `json:"expires_at"`
	IsOnline   bool   `json:"is_online"` // FK
	IPAddress  string `json:"ip_address"`
	DeviceInfo string `json:"device_info"`
}

func main() {
	app := fiber.New()

	// Database connection pool
	// connStr := os.Getenv("DATABASE_URL") causes error for now, as if getting a different env variable
	connStr := "postgresql://postgres:signorsergtsop@localhost:5432/signor_db"
	dbpool, err := pgxpool.New(context.Background(), connStr)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Unable to create connection pool: %v\n", err)
		os.Exit(1)
	} else {
		log.Println("PostgreSQL connected successfully")
	}
	defer dbpool.Close()

	envErr := godotenv.Load(".env")
	if envErr != nil {
		log.Fatal("Error loading .env file")
	}

	app.Use(cors.New(cors.Config{
		AllowOrigins: "*", // https://localhost:3000/,http://192.168.1.5:3000 // Temporary, for development. Wild card is dangerous.
		AllowHeaders: "Origin,Content-Type,Accept",
		AllowMethods: "GET,POST,PUT,DELETE,OPTIONS",
		// AllowCredentials: true,
	}))

	PORT := os.Getenv("PORT")
	if PORT == "" {
		PORT = "4000"
	}

	// GET users, Query
	app.Get("/api/users", func(c *fiber.Ctx) error {
		rows, err := dbpool.Query(context.Background(), "SELECT id, email, COALESCE(family_name, 'null'), COALESCE(given_name, 'null'), COALESCE(middle_name, 'null'), account_type, created_at::text, updated_at::text, is_active, is_pldl_authorized FROM users")
		if err != nil {
			log.Printf("Error querying users: %v", err)
			return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
		}
		defer rows.Close()

		log.Println("Querying users...")
		fmt.Println("Users:\n==================================================")
		var users []User
		for rows.Next() {
			var user User
			if err := rows.Scan(
				&user.ID,
				&user.Email,
				&user.FamilyName,
				&user.GivenName,
				&user.MiddleName,
				&user.AccountType,
				&user.CreatedAt,
				&user.UpdatedAt,
				&user.IsActive,
				&user.IsPLDLAuthorized); err != nil {
				fmt.Println("Error scanning row:", err)
				log.Fatalf("Error scanning row: %v", err)
			}
			fmt.Println(
				"User ID:", user.ID,
				"\nEmail:", user.Email,
				"\nFamily Name:", user.FamilyName,
				"\nGiven Name:", user.GivenName,
				"\nMiddle Name:", user.MiddleName,
				"\nAccount Type:", user.AccountType,
				"\nCreated At:", user.CreatedAt,
				"\nUpdated At:", user.UpdatedAt,
				"\nIs Active:", user.IsActive,
				"\nIs PLDL Authorized:", user.IsPLDLAuthorized,
			)
			fmt.Println("--------------------------------------------------")
			users = append(users, user)

		}
		fmt.Print("Total Users Found: ", len(users), "\n\n")
		log.Println("Users queried successfully")

		return c.Status(200).JSON(users)
	})

	// testing, also, need to know about Status codes

	// CREATE user, Account Creation/Registration endpoint
	app.Post("/api/register", func(c *fiber.Ctx) error {
		user := &User{}

		if err := c.BodyParser(user); err != nil {
			return err
		}

		// Server-Side Validations
		// Check if email is provided
		if user.Email == "" {
			log.Println("error: Email is required")
			return c.Status(400).JSON(fiber.Map{"error": "Email is required"})
		}

		// Validate email
		valid := func(email string) bool {
			_, err := mail.ParseAddress(email)
			return err == nil
		}
		if !valid(user.Email) {
			log.Println("error: Invalid email format")
			return c.Status(400).JSON(fiber.Map{"error": "Invalid email format"})
		}

		// Check if email already exists in the database
		rows, err := dbpool.Query(context.Background(), "SELECT email FROM users")
		if err != nil {
			log.Printf("Error querying emails from users: %v", err)
			return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
		}
		defer rows.Close()

		for rows.Next() {
			var email string
			if err := rows.Scan(&email); err != nil {
				log.Printf("Error scanning email: %v", err)
				return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
			}
			if email == user.Email {
				log.Println("error: Email already exists")
				return c.Status(400).JSON(fiber.Map{"error": "Email already exists"})
			}
		}

		// Check if an account type is selected
		if user.AccountType == "" {
			log.Println("error: Please select an account type")
			return c.Status(400).JSON(fiber.Map{"error": "Please select an account type"})
		} else if user.AccountType != "student" && user.AccountType != "teacher" {
			log.Println("error: Invalid account type")
			return c.Status(400).JSON(fiber.Map{"error": "Invalid account type"})
		}

		// Check if family name is provided
		if user.FamilyName == "" {
			log.Println("error: Family Name is required")
			return c.Status(400).JSON(fiber.Map{"error": "Family Name is required"})
		}
		// Check if given name is provided
		if user.GivenName == "" {
			log.Println("error: Given Name is required")
			return c.Status(400).JSON(fiber.Map{"error": "Given Name is required"})
		}

		// Password validation
		if user.Password == "" {
			log.Println("error: Password is required")
			return c.Status(400).JSON(fiber.Map{"error": "Password is required"})
		}
		if len(user.Password) < 8 {
			log.Println("error: Password must be at least 8 characters long")
			return c.Status(400).JSON(fiber.Map{"error": "Password must be at least 8 characters long"})
		}
		if len(user.Password) > 32 {
			log.Println("error: Password must not exceed 32 characters")
			return c.Status(400).JSON(fiber.Map{"error": "Password must not exceed 32 characters"})
		}
		// Password Hashing
		hash, error := passwordHashing.HashPassword(user.Password)
		if error != nil {
			log.Printf("Error hashing password: %v", error)
			return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
		} else {
			log.Println("Password hashed successfully", hash)
		}

		// After passing validations, insert user into the database
		_, err = dbpool.Exec(context.Background(), "INSERT INTO users (email, account_type, family_name, given_name, password_hash) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING",
			user.Email,
			user.AccountType,
			user.FamilyName,
			user.GivenName,
			hash,
		)
		if err != nil {
			log.Printf("Error inserting user: %v", err)
			return c.Status(400).JSON(fiber.Map{"error": "Creating user failed"})
		}

		log.Println("User created successfully")
		return c.Status(201).JSON("User created successfully")
	})

	// SELECT users, check if matching credentials, Login endpoint
	app.Post("/api/login", func(c *fiber.Ctx) error {
		user := &UserLogin{}

		if err := c.BodyParser(user); err != nil {
			return err
		}

		// Server-Side Validations
		// Check if email is provided
		if user.Email == "" {
			log.Println("error: Email is required")
			return c.Status(400).JSON(fiber.Map{"error": "Email is required"})
		}

		// Validate email
		valid := func(email string) bool {
			_, err := mail.ParseAddress(email)
			return err == nil
		}
		if !valid(user.Email) {
			log.Println("error: Invalid email format")
			return c.Status(400).JSON(fiber.Map{"error": "Invalid email format"})
		}

		// Password validation
		if user.Password == "" {
			log.Println("error: Password is required")
			return c.Status(400).JSON(fiber.Map{"error": "Password is required"})
		}
		if len(user.Password) < 8 {
			log.Println("error: Password must be at least 8 characters long")
			return c.Status(400).JSON(fiber.Map{"error": "Password must be at least 8 characters long"})
		}
		if len(user.Password) > 32 {
			log.Println("error: Password must not exceed 32 characters")
			return c.Status(400).JSON(fiber.Map{"error": "Password must not exceed 32 characters"})
		}

		// Check if user email is present in the database
		rows, err := dbpool.Query(context.Background(), "SELECT email FROM users")
		if err != nil {
			log.Printf("Error querying emails from users: %v", err)
			return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
		}
		defer rows.Close()

		emailFound := false
		for rows.Next() {
			var email string
			if err := rows.Scan(&email); err != nil {
				log.Printf("Error scanning email: %v", err)
				return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
			}
			if email == user.Email {
				emailFound = true
				log.Println("Email found")
			}
		}
		if !emailFound {
			log.Println("error: User does not exist")
			return c.Status(404).JSON(fiber.Map{"error": "Email not found, user does not exist"})
		}

		// Get password hash from matching email
		var hash string
		err = dbpool.QueryRow(context.Background(), "SELECT password_hash FROM users WHERE email = $1", user.Email).Scan(&hash)
		if err != nil {
			log.Printf("Error querying hash from user: %v", err)
			return c.Status(500).JSON(fiber.Map{"error": "Internal Server Error"})
		}
		defer rows.Close()

		// Password Verification
		match := passwordHashing.VerifyPassword(user.Password, hash)
		if !match {
			log.Println("error: Invalid password")
			return c.Status(401).JSON(fiber.Map{"error": "Invalid password"})
		}

		/*
			// After passing validations, log in user, insert audit log, and session updates into database
			_, err = dbpool.Exec(context.Background(), "INSERT INTO users (email, password_hash) VALUES ($1, $2) ON CONFLICT DO NOTHING",
				user.Email,
				hash,
			)
			if err != nil {
				log.Printf("Error inserting data to database: %v", err)
				return c.Status(400).JSON(fiber.Map{"error": "Insert data to database failed"})
			}
		*/

		log.Println("User logged in successfully")
		return c.Status(200).JSON("User logged in successfully")
	})

	// UPDATE user details, Account Update endpoint
	app.Patch("/api/users/update", func(c *fiber.Ctx) error {
		user := &User{}
		if err := c.BodyParser(user); err != nil {
			return err
		}
		userEmail := user.Email
		newGivenName := user.GivenName

		if user.Email == "" {
			fmt.Println("Email is required")
			return c.Status(400).JSON(fiber.Map{"error": "Email is required"})
		}
		if user.GivenName == "" {
			fmt.Println("New Given Name is required")
			return c.Status(400).JSON(fiber.Map{"error": "New Given Name is required"})
		}

		_, err = dbpool.Exec(context.Background(), "UPDATE users SET given_name = $1 WHERE email = $2", newGivenName, userEmail)
		if err != nil {
			log.Fatalf("Error updating user: %v", err)
		}
		fmt.Println("User detail updated successfully")

		return c.Status(200).JSON("User updated successfully")
	})

	// DELETE user
	// This is here for learning purposes, for deletes, we'll be less destructive
	app.Delete("/api/users/delete", func(c *fiber.Ctx) error {
		user := &User{}
		if err := c.BodyParser(user); err != nil {
			return err
		}
		userEmail := user.Email

		if user.Email == "" {
			fmt.Println("Email is required")
			return c.Status(400).JSON(fiber.Map{"error": "Email is required"})
		}

		_, err = dbpool.Exec(context.Background(), "DELETE FROM users WHERE email = $1", userEmail)
		if err != nil {
			log.Fatalf("Error deleting user: %v", err)
		}
		fmt.Println("User deleted successfully")

		return c.Status(200).JSON("User deleted successfully")
	})

	log.Fatal(app.Listen(":" + PORT))
}

/*
	// POSTMAN used for testing requests

	// find user by email
	for i := range users {
		if users[i].Email == email {
			users[i] = *user
			return c.Status(200).JSON(users[i])
		}
	}

	// example basis
	var book Book
	err = pool.QueryRow(context.Background(), "SELECT id, title, author_id, published_year, genre FROM books WHERE title=$1", "Harry Potter").Scan(&book.ID, &book.Title, &book.AuthorID, &book.PublishedYear, &book.Genre)
	if err != nil {
		log.Fatalf("Error querying book: %v", err)
	}
	fmt.Println("Book Details:", book)
*/
