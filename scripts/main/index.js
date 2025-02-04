import { game } from '../game/game.js';
import { main } from './main.js'

const gameDiv = ` <div class="content">
<div class="burger" id="burger">
<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
<path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
</svg>
</div>
<div class="board-layout-nav">
    <div class="nav-component">
        <div class="nav-top-menu">
            <a href="" class="nav-link-component nav-link-main-design chess-logo"
                target="" id="mainButton">
                <span class="nav-link-img"></span>
            </a>
            <a href="https://www.chess.com/play"
                class=" nav-link-component nav-link-play nav-link-main-design nav-link-top-level"
                target="_self">
                <span class="nav-img nav-play-img"></span>
                <span class="nav-text">Play</span>
            </a>
            <a href="https://www.chess.com/puzzles/rated"
                class=" nav-link-component nav-link-puzzels nav-link-main-design nav-link-top-level"
                target="_self">
                <span class="nav-img nav-play-img"></span>
                <span class="nav-text">Puzzles</span>
            </a>
            <a href="https://www.chess.com/learn"
                class=" nav-link-component nav-link-learn nav-link-main-design nav-link-top-level"
                target="_self">
                <span class="nav-img nav-learn-img"></span>
                <span class="nav-text">Learn</span>
            </a>
            <a href="https://www.chess.com/watch"
                class=" nav-link-component nav-link-watch nav-link-main-design nav-link-top-level"
                target="_self">
                <span class="nav-img nav-watch-img"></span>
                <span class="nav-text">Watch</span>
            </a>
            <a href="https://www.chess.com/today"
                class=" nav-link-component nav-link-news nav-link-main-design nav-link-top-level"
                target="_self">
                <span class="nav-img nav-news-img"></span>
                <span class="nav-text">News</span>
            </a>
            <a href="https://www.chess.com/social"
                class=" nav-link-component nav-link-social nav-link-main-design nav-link-top-level"
                target="_self">
                <span class="nav-img nav-social-img"></span>
                <span class="nav-text">Social</span>
            </a>
            <button goto="https://www.chess.com/more"
                class=" nav-link-component nav-link-button nav-link-main-design nav-link-top-level more-top"
                target="_self">
                <span class="nav-img nav-more-img"></span>
                <span class="nav-text">More</span>
            </button>
            <div class="nav-serch-form">
                <form name="nav-autofill-search">
                    <div class="autocomplete-component">
                        <div class="autocomplete-input-group">
                            <div class="ui_v5-input-group-component ui_v5-input-group-dark">
                                <input class="ui_v5-input-component ui_v5-input-dark" id="keyword-autocomplete"
                                    aria-label="Search" autocomplete="" maxlength="32" name="keyword"
                                    placeholder="Search" type="text" value="">
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="nav-menu-area">
            <button aria-label="Change language" class="nav-action language-select" type="button">
                <span class="cc-icon-glyph cc-icon-glyph cc-icon-medium ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="local-globe-africa" aria-hidden="true"
                        width="28.75" height="28.75" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M16 26.5c5.767 0 10.5-4.733 10.5-10.5 0-5.8-4.7-10.5-10.5-10.5S5.5 10.2 5.5 16 10.2 26.5 16 26.5m-1.967-15.333c0 .6-.866.266-.966 1.1-.134 1 1.566 1.366 1.766-.134h2.834c.633 0 .933.334.933.667 0 .4-.267.833-.9.833-.667 0-.667 0-1.033-.233-.634-.433-.5-.733-1.7-.433-2.834 1-3 1.166-2.567 2.6.7 2.333.633 2.233 3.3 1.9 0 1.033.067 1.133 1.067 1.5V20.9c0 1.533 1.2 1.9 2.033.733l.933-1.3v.534c0 .333.334.433.467.233l.6-.833c.433-.6-.067-.934-.5-.6l-.3.233v-1l1.333-1.767c.367-.466.167-1.033-.433-1.033h-.7c-.2-.4-1.2-1.733-.6-1.933l.867.7c.5.4 1.533.233 1.833-.434l.9.2c.067.8.567 1.234 1.267 1.367 0 4.667-3.8 8.5-8.467 8.5-2 0-3.867-.667-5.4-1.933.033-4.7.567-3.134-3.1-6.067V16c0-1.267.267-2.533.8-3.6 2.8-.333 3.467-1.8 3.367-3.6C12.8 7.967 14.333 7.5 16 7.5c1.567 0 2.667.233 4.6 1.3h-3.7c-1.033 0-1.333.533-1.333 1.233v.467c0 .6-.8.6-.8 0v-.433c0-.5-.767-.5-.767 0v.233h-.367c-.4 0-.4.633 0 .633h.4z">
                        </path>

                    </svg>
                </span>
                <span class="nav-bottom-text nav-language-name">
                    English
                </span>
            </button>
            <button aria-label="Light/Dark Interface" class="nav-action ui-mode"
                data-amplitude-nav-selection="subnav-uimode" data-nav-ui-mode="" type="button">
                <div id="mode" data-v-app=""><span class="cc-icon-glyph cc-icon-medium"><svg viewBox="0 0 32 32"
                            height="28.75" width="28.75" aria-hidden="true" class="circle-fill-contrast"
                            xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                d="M16 24.933V7.067a8.934 8.934 0 0 0 0 17.866m0 1.567c5.767 0 10.5-4.733 10.5-10.5S21.767 5.5 16 5.5 5.5 10.233 5.5 16 10.233 26.5 16 26.5m0-2c-4.667 0-8.5-3.833-8.5-8.5s3.833-8.5 8.5-8.5 8.5 3.833 8.5 8.5-3.833 8.5-8.5 8.5">
                            </path>
                        </svg></span>
                </div>
                <span class="nav-bottom-text">
                    <span class="light">Light UI</span>
                </span>
            </button>
            <button type="button" aria-label="Help" id="nav-link-help" class="nav-action has-popover help"
                data-amplitude-nav-selection="subnav-help">
                <span class="cc-icon-glyph cc-icon-glyph cc-icon-medium ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="square-fill-question" aria-hidden="true"
                        width="28.75" height="28.75" viewBox="0 0 32 32">
                        <path fill="currentColor"
                            d="M11 26h10c3.7 0 5-1.3 5-5V11c0-3.7-1.3-5-5-5H11c-3.7 0-5 1.3-5 5v10c0 3.7 1.3 5 5 5m4.533-8.367c-.733 0-1-.266-1-1.033v-.967c0-.733.267-1 1.034-1h.366c1.7 0 2.567-.133 2.567-1.2 0-1.233-1.067-1.6-2.067-1.6-1.3 0-2.433.767-3.133 1.4-.5.5-.867.5-1.367-.1l-.566-.7c-.467-.566-.434-.966.066-1.533.9-.833 2.634-2.067 4.9-2.067C19 8.833 21.5 10.4 21.5 13.4c0 1.7-1.067 4.233-5.567 4.233zm.467 5.2c-1.133 0-1.833-.7-1.833-1.833s.7-1.833 1.833-1.833 1.833.7 1.833 1.833-.7 1.833-1.833 1.833">
                        </path>
                    </svg>
                </span>
                <span class="nav-bottom-text">
                    Support
                </span>
            </button>
        </div>
    </div>
</div>
<div class="board-layout-main">
    <div class="board-layout-player board-layout-top" id="board-layout-player-top">
        <div class="player-row-component player-row-top" is-minimal-avatar="" is-new-board="">
            <div class="player-row-container">
                <div class="player-row-wrapper"><img alt=""
                        class="avatar-component player-row-avatar player-row-with-avatar-background"
                        src="https://images.chesscomfiles.com/uploads/v1/bot_personality/fc773c3c-5ca3-11ee-960b-2fa00c967982.359ef560.384x384o.6ef729300821.png"
                        srcset="https://images.chesscomfiles.com/uploads/v1/bot_personality/fc773c3c-5ca3-11ee-960b-2fa00c967982.359ef560.384x384o.6ef729300821.png, https://images.chesscomfiles.com/uploads/v1/bot_personality/fc773c3c-5ca3-11ee-960b-2fa00c967982.359ef560.384x384o.6ef729300821@2x.png 2x"
                        width="40" height="40"
                        image="https://images.chesscomfiles.com/uploads/v1/bot_personality/fc773c3c-5ca3-11ee-960b-2fa00c967982.359ef560.384x384o.6ef729300821.png"
                        style="height: 40px; width: 40px;">
                    <div>
                        <div>
                            <div class="cc-user-block-component"><!----> <!---->
                                <div class="cc-text-medium-bold cc-user-username-component cc-user-username-white"
                                    data-test-element="user-tagline-username">Magnus Carlsen</div>
                                <div class="cc-text-medium cc-user-rating-white">
                                    (9999+)
                                </div> <!----> <!---->
                            </div>
                        </div>
                        <div class="captured-pieces player-row-pieces"> <!----></div>
                    </div>
                </div>
            </div> <!---->
        </div>
    </div>
    <div class="game">
        <div class="board" id="board">
        </div>
    </div>
    <div id="board-layout-player-bottom" class="board-layout-player board-layout-bottom">
        <div id="player-bottom" data-v-app="">
            <div class="player-row-component" is-minimal-avatar="" is-new-board="">
                <div class="player-row-container">
                    <div class="player-row-wrapper"><img alt=""
                            class="avatar-component player-row-avatar player-row-with-avatar-background"
                            src="https://www.chess.com/bundles/web/images/user-image.svg"
                            srcset="https://www.chess.com/bundles/web/images/user-image.svg, https://www.chess.com/bundles/web/images/user-image.svg 2x"
                            width="40" height="40"
                            image="https://www.chess.com/bundles/web/images/user-image.svg"
                            style="height: 40px; width: 40px;">
                        <div>
                            <div>
                                <div class="cc-user-block-component"><!----> <!---->
                                    <div class="cc-text-medium-bold cc-user-username-component cc-user-username-white"
                                        data-test-element="user-tagline-username">Guest</div> <!----> <!---->
                                    <!---->
                                </div>
                            </div>
                            <div class="captured-pieces player-row-pieces"> <!----></div>
                        </div>
                    </div>
                </div> <!---->
            </div>
        </div>
    </div>
</div>
<div class="board-layout-sidebar">
    <div class="sidebar-controller-container">
        <div class="cc-sidebar-header-component">
            <div class="cc-sidebar-header-header-center">
                <img aria-hidden="true" alt="cute-bot" class="cc-icon-img cc-sidebar-header-feature-icon"
                    height="24" src="https://www.chess.com/bundles/web/images/color-icons/cute-bot.svg"
                    width="24">
                <h1 class="cc-sidebar-header-title cc-sidebar-header-secondary">Play Bots</h1>
            </div>
        </div>
        <div class="play-controller-component sidebar-controller-component">
            <div
                class="bot-speech-multiple-messages-component bot-speech-multiple-messages-withPadding play-controller-messages">
                <div class="spinner-border" role="status" id="spinner">
  <span class="visually-hidden">Loading...</span>
</div>
            </div>
            <div class="play-controller-moves-container">
                <div class="play-controller-scrollable">
                    <div class="eco-opening-panel">
                        <span class="eco-opening-name" id="status"></span>
                        <div class="eco-opening-links">
                            <a class="eco-opening-opening" title="Openings" href="/openings/French-Defense"
                                target="_blank"><span class="icon-font-chess chess-book eco-opening-icon"
                                    data-v-app=""><!----></span></a>
                            <a class="eco-opening-explorer" title="Explorer"
                                href="/explorer?color=white&amp;gameSource=master&amp;moveList=e4+e6&amp;ne=1&amp;ply=2"
                                target="_blank"><span class="icon-font-chess circle-compass eco-opening-icon"
                                    data-v-app=""><!----></span></a>
                        </div>
                    </div>
                    <div class="play-controller-moveList move-list chessboard-pkg-move-list-component">
                        <div class="moves" id="moves">



                        </div>
                    </div>
                </div>
            </div>
            <div class=""><!---->
                <div class="game-controls-controller-component">
                    <div class="primary-controls-topControls">
                        <button class="cc-button-component cc-button-secondary cc-button-large" type="button"
                            aria-label="New Game" data-tooltip-target="0" id="resign"><!----> <!---->
                            <span class="cc-icon-glyph cc-icon-large">
                                <svg viewBox="0 0 32 32" height="32" width="32" aria-hidden="true"
                                    class="game-flag-straight" xmlns="http://www.w3.org/2000/svg">
                                    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        d="M7.5 26c1.1 0 1.5-.4 1.5-1.5v-17C9 6.4 8.6 6 7.5 6S6 6.4 6 7.5v17c0 1.1.4 1.5 1.5 1.5M26 20.5v-9c0-1.1-.4-1.5-1.5-1.5h-3.667c-1.1 0-1.8-.267-2.633-1l-1.167-1c-1.666-1.5-3-2-5.233-2H7.567L7.6 18h4.5c1.1 0 1.8.267 2.6 1.033l.967.9C17.267 21.467 18.6 22 20.833 22H24.5c1.1 0 1.5-.4 1.5-1.5">
                                    </path>
                                </svg></span></button> <button
                            class="cc-button-component cc-button-secondary cc-button-large" type="button"
                            aria-label="Move Back" data-tooltip-target="1"><!----> <!----> <span
                                class="cc-icon-glyph cc-icon-large"><svg viewBox="0 0 32 32" height="32"
                                    width="32" aria-hidden="true" class="arrow-chevron-left rtl-support"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        d="m10.7 18.433 6.733 6.734c1.167 1.166 1.634 1.166 2.8 0 1.167-1.167 1.167-1.634 0-2.834L13.9 16l6.333-6.367c1.167-1.166 1.167-1.633 0-2.8-1.166-1.166-1.633-1.166-2.833 0l-6.7 6.734c-1.533 1.5-1.533 3.366 0 4.866">
                                    </path>
                                </svg></span></button> <button
                            class="cc-button-component cc-button-secondary cc-button-large" type="button"
                            aria-label="Move Forward" data-tooltip-target="2"><!----> <!----> <span
                                class="cc-icon-glyph cc-icon-large"><svg viewBox="0 0 32 32" height="32"
                                    width="32" aria-hidden="true" class="arrow-chevron-right rtl-support"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        d="m21.3 13.567-6.733-6.734c-1.167-1.166-1.634-1.166-2.8 0C10.6 8 10.6 8.467 11.767 9.667L18.1 16l-6.333 6.367c-1.167 1.166-1.167 1.633 0 2.8 1.166 1.166 1.633 1.166 2.833 0l6.7-6.734c1.533-1.5 1.533-3.366 0-4.866">
                                    </path>
                                </svg></span></button> <button
                            class="cc-button-component cc-button-secondary cc-button-large" type="button"
                            aria-label="Show Hint" data-tooltip-target="3"><!----> <!----> <span
                                class="cc-icon-glyph cc-icon-large"><svg viewBox="0 0 32 32" height="32"
                                    width="32" aria-hidden="true" class="device-bulb-glow"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                        d="M12.333 22.233V24h7.334v-1.767c0-2.2 3.066-3.766 3.066-7.666C22.733 10.767 19.8 8 16 8s-6.733 2.767-6.733 6.567c0 3.9 3.066 5.466 3.066 7.666M7.567 12.7c.3-.767-.1-1.633-.9-1.9-.767-.3-1.634.1-1.9.9-.3.767.1 1.633.9 1.9.766.3 1.633-.1 1.9-.9m2.866-4.6c.7-.5.867-1.433.367-2.1-.467-.7-1.4-.833-2.067-.367-.7.467-.866 1.4-.366 2.1.466.667 1.4.834 2.066.367M16 6.333c.833 0 1.5-.666 1.5-1.5 0-.833-.667-1.5-1.5-1.5s-1.5.667-1.5 1.5c0 .834.667 1.5 1.5 1.5m8.4 6.367c.3.8 1.133 1.2 1.933.9a1.536 1.536 0 0 0 .9-1.933 1.55 1.55 0 0 0-1.933-.9c-.8.3-1.2 1.166-.9 1.933m-2.867-4.6c.7.467 1.6.3 2.1-.367.467-.7.3-1.633-.366-2.1-.7-.466-1.634-.3-2.1.367-.467.7-.3 1.6.366 2.1M18.8 26h-5.533c.333 1.5 1.7 2.1 2.766 2.1s2.434-.6 2.767-2.1">
                                    </path>
                                </svg></span></button>
                    </div>
                    <div class="small-controls-smallControls">
                        <div class="small-controls-leftIcons"><button type="button" aria-label="Share"
                                class="small-controls-btn" data-tooltip-target="4"><span
                                    class="small-controls-icon icon-font-chess share"></span></button><button
                                type="button" aria-label="Download" class="small-controls-btn"
                                data-tooltip-target="5"><span
                                    class="small-controls-icon icon-font-chess download"></span></button><button
                                type="button" aria-label="Settings" class="small-controls-btn"
                                data-tooltip-target="6"><span
                                    class="small-controls-icon icon-font-chess circle-gearwheel"></span></button>
                            <!---->
                        </div>
                        <div class="small-controls-rightIcons"><button type="button" class="small-controls-btn"
                                aria-label="Resign" data-tooltip-target="7"><span
                                    class="small-controls-icon icon-font-chess flag"></span>
                                <span>Resign</span></button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`

const mainPage = `<div class="mode-pick">
<button id="online" class="cc-button-component cc-button-primary cc-button-xx-large">Играть онлайн</button>
<button id="offline" class="cc-button-component cc-button-xx-large">Играть на
    доске</button>`

const changePage = (page) => document.body.innerHTML = page;

const checkHash = () => {
    const mode = window.location.hash.slice(1)
    switch (mode) {
        case 'main': changePage(mainPage); main(); break;
        case 'offline': changePage(gameDiv); game(); break
        case 'online': changePage(gameDiv); game(); break
        default: window.location.hash = 'main';
    }
}
checkHash()


window.addEventListener('hashchange', e => {
    checkHash()
})

