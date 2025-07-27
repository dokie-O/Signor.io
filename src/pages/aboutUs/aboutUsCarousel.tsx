import React, { useState } from 'react';
import '../../App.css';

import montemayor_img from '../../assets/images/group_member_images/archi_montemayor.png'
import melad_img from '../../assets/images/group_member_images/daniel_joseph_melad.png'
import mamangun_img from '../../assets/images/group_member_images/alfie_mamangun.png'
import domingo_img from '../../assets/images/group_member_images/joshua_ianmar_domingo.png'
import guiao_img from '../../assets/images/group_member_images/junica_marsen_jem_guiao.png'
import quinit_img from '../../assets/images/group_member_images/allyssa_geanne_quinit.png'
import cacalda_img from '../../assets/images/group_member_images/adrian_joseph_cacalda.png'

import montemayor_details from '../../assets/images/group_member_images/montemayor_details.png'
import melad_details from '../../assets/images/group_member_images/melad_details.png'
import mamangun_details from '../../assets/images/group_member_images/mamangun_details.png'
import domingo_details from '../../assets/images/group_member_images/domingo_details.png'
import guiao_details from '../../assets/images/group_member_images/guiao_details.png'
import quinit_details from '../../assets/images/group_member_images/quinit_details.png'
import cacalda_details from '../../assets/images/group_member_images/cacalda_details.png'

export const AboutUsCarousel = () => {
    const [guiaoPlace, setGuiaoPlace] = useState(1);
    const [quinitPlace, setQuinitPlace] = useState(2);
    const [cacaldaPlace, setCacaldaPlace] = useState(3);
    const [montemayorPlace, setMontemayorPlace] = useState(4);
    const [meladPlace, setMeladPlace] = useState(5);
    const [mamangunPlace, setMamangunPlace] = useState(6);
    const [domingoPlace, setDomingoPlace] = useState(7);

    return (
        <section className='about-us-carousel'>
            <div className='carousel-title'>
                <span className='c-main-title'>MEET THE TEAM</span>
                <span className='c-subtitle'>committed to creating smart, secure solutions.</span>
            </div>
            <div className='carousel-container'>
                <img 
                    src = {guiao_img}
                    className={'group-member-image img' + guiaoPlace}
                    alt='junica_marsen_jem_guiao.png'
                    onClick={() => {MoveTo(guiaoPlace)}}
                    onMouseMove={(e) => {if (guiaoPlace === 4) e.currentTarget.src = guiao_details}}
                    onMouseLeave={(e) => {e.currentTarget.src = guiao_img}}
                />
                <img 
                    src = {quinit_img} 
                    className={'group-member-image img' + quinitPlace}
                    alt='allyssa_geanne_quinit.png'
                    onClick={() => {MoveTo(quinitPlace)}}
                    onMouseMove={(e) => {if (quinitPlace === 4) e.currentTarget.src = quinit_details}}
                    onMouseLeave={(e) => {e.currentTarget.src = quinit_img}}
                />    
                <img
                    src = {cacalda_img} 
                    className={'group-member-image img' + cacaldaPlace}
                    alt='adrian_joseph_cacalda.png'
                    onClick={() => {MoveTo(cacaldaPlace)}}
                    onMouseMove={(e) => {if (cacaldaPlace === 4) e.currentTarget.src = cacalda_details}}
                    onMouseLeave={(e) => {e.currentTarget.src = cacalda_img}}
                />
                <img
                    src = {montemayor_img}
                    className={'group-member-image img' + montemayorPlace} 
                    alt='archi_montemayor.png'
                    onClick={() => {MoveTo(montemayorPlace)}}
                    onMouseMove={(e) => {if (montemayorPlace === 4) e.currentTarget.src = montemayor_details}}
                    onMouseLeave={(e) => {e.currentTarget.src = montemayor_img}}
                />
                <img
                    src = {melad_img}
                    className={'group-member-image img' + meladPlace}
                    alt='daniel_joseph_melad.png'
                    onClick={() => {MoveTo(meladPlace)}}
                    onMouseMove={(e) => {if (meladPlace === 4) e.currentTarget.src = melad_details}}
                    onMouseLeave={(e) => {e.currentTarget.src = melad_img}}
                />
                <img
                    src = {mamangun_img}
                    className={'group-member-image img' + mamangunPlace}
                    alt='alfie_mamangun.png'
                    onClick={() => {MoveTo(mamangunPlace)}}
                    onMouseMove={(e) => {if (mamangunPlace === 4) e.currentTarget.src = mamangun_details}}
                    onMouseLeave={(e) => {e.currentTarget.src = mamangun_img}}
                />
                <img
                    src = {domingo_img}
                    className={'group-member-image img' + domingoPlace} 
                    alt='joshua_ianmar_domingo.png'
                    onClick={() => {MoveTo(domingoPlace)}}
                    onMouseMove={(e) => {if (domingoPlace === 4) e.currentTarget.src = domingo_details}}
                    onMouseLeave={(e) => {e.currentTarget.src = domingo_img}}
                />
            </div>
        </section>
    );

    function MoveTo(place : number) {        
        let moveAmt : number = 0;
        if (place > 4) {
            moveAmt--;
            setPlaces();
            if (place > 5) {
                setTimeout(() => {
                    moveAmt--;
                    setPlaces();
                }, 800);
                if (place > 6) {
                    setTimeout(() => {
                        moveAmt--;
                        setPlaces()
                    }, 1600);
                }
            }
        }
        else if (place < 4) {
            moveAmt++;
            setPlaces();
            if (place < 3) {
                setTimeout(() => {
                    moveAmt++;
                    setPlaces();
                }, 800);
                if (place < 2) setTimeout(() => {
                    moveAmt++;
                    setPlaces();
                }, 1600);
            }
        }

        function LimitLoop(previousPlace : number, moveAmtInput : number) {
            let newPlace : number = previousPlace + moveAmtInput;
                
            if (newPlace === 8) return 1;
            else if (newPlace === 9) return 2;
            else if (newPlace === 10) return 3;
            else if (newPlace === 0) return 7;
            else if (newPlace === -1) return 6;
            else if (newPlace === -2) return 5;
            else return newPlace;
        }

        function setPlaces() {
            setGuiaoPlace(LimitLoop(guiaoPlace, moveAmt));
            setQuinitPlace(LimitLoop(quinitPlace, moveAmt));
            setCacaldaPlace(LimitLoop(cacaldaPlace, moveAmt));
            setMontemayorPlace(LimitLoop(montemayorPlace, moveAmt));
            setMeladPlace(LimitLoop(meladPlace, moveAmt));
            setMamangunPlace(LimitLoop(mamangunPlace, moveAmt));
            setDomingoPlace(LimitLoop(domingoPlace, moveAmt));
        }
    };
};