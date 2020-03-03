<template>
 <footer class="footer">
     <div class="text-center">
         <div class="anchor"><a href="#">Schreibe mir!</a></div>
         <ul>
             <li class="title">
                Lukas Droste
             </li>
             <li>
                 Cranachstrasse 1
             </li>
             <li>
                 50733 Köln
             </li>
         </ul>

         <ul>
             <li>
                 <a href="#">01575 2238408</a>
             </li>
             <li>
                 <a href="#">dr.oste129@gmail.com</a>
             </li>
         </ul>

         <span>© 2020</span><a href="#"> Lukas Droste</a><br>

         <span><a href="#">Datenschutz </a> / <a href="#">Impressum</a></span>
     </div>
 </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    .footer {
        position: relative;
        margin: 20px 0 0;
        height: fit-content;
        z-index: 1;
        background-color: var(--section-bg);
        width: calc(100% - 30px);
        padding: 75px 15px 50px;
        @media (min-width: 767px) {
            padding: 90px 15px 50px;
        }
        @media (min-width: 1023px) {
            padding: 100px 15px 50px;;
        }
        @media (min-width: 1439px) {
            padding: 120px 15px 50px;
        }
        &::before {
             z-index: 2;
             content: '';
             position: absolute;
             top: -20px;
             left: -2px;
             height: 35px;
             width: calc(100% + 2px);
             background-color: white;
             transform: rotate(-3deg);
             border-bottom: 2px solid var(--navigation-mobile-color);

            @media (min-width: 767px) {
                top: - 30px;
                height: 55px;
            }
            @media (min-width: 1023px) {
                height: 75px;
                top: - 40px;
            }
            @media (min-width: 1439px) {
                height: 135px;
                top: - 70px;
            }
         }
        ul {
            padding: 0;

            li {
                list-style: none;
                margin: 5px 0;

                @media (min-width: 767px) {
                    margin: 10px 0;
                }
                @media (min-width: 1023px) {
                    margin: 15px 0;
                }
                @media (min-width: 1439px) {
                    margin: 20px 0;
                }

                &.title {
                    font-size: 20px;
                    font-weight: 900;
                    margin: 10px 0;
                    @media (min-width: 767px) {
                        font-size: 24px;
                        margin: 15px 0;
                    }
                    @media (min-width: 1024px) {
                        font-size: 28px;
                        margin: 25px 0;
                    }
                    @media (min-width: 1439px) {
                        font-size: 32px;
                        margin: 30px 0;
                    }
                }
            }
        }

        a {
            text-decoration: none;
            color: var(--main-bar-color);
        }

        span {
            margin: 5px 0;
        }

        .anchor {
            top: -20px;
            left: calc(50% - 90px);
            z-index: 999;
            position: absolute;
            display: block;
            list-style: none;
            background-color: var(--main-bar-color);
            text-align: center;
            height: fit-content;

            @media (min-width: 767px) {
                left: calc(50% - 100px);
            }
            @media (min-width: 1023px) {
                top: -20px;
                left: calc(50% - 140px);
            }
            @media (min-width: 1439px) {
                top: 0;
                left: calc(50% - 166px);
            }

            a {
                display: block;
                padding: 15px 20px;
                text-decoration: none;
                color: var(--navigation-mobile-color);
                font-size: 24px;
                font-weight: 900;
                filter: brightness(1.1);

                @media (min-width: 767px) {
                    padding: 20px 25px;
                    font-size: 28px;
                }
                @media (min-width: 1023px) {
                    padding: 30px 45px;
                    font-size: 32px;
                }
                @media (min-width: 1439px) {
                    padding: 35px 55px;
                    font-size: 34px;
                }
            }
        }
    }

</style>
