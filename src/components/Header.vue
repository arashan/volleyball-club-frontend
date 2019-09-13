<template>
    <header class="header header--transp">
        <div class="container">
            <div class="header__inner">
                <Logo></Logo>
                <button class="btn btn--transpbr header__humburg"
                        v-bind:class="{header__humburgClose: showMenu}"
                        v-on:click="showMenu = !showMenu">
                </button>
                <ul class="menu-nav header__nav">
                    <li class="menu-nav__li" v-for="item in headerItems" :key="item.name"><a :href="item.link">{{item.name}}</a></li>
                </ul>

                <div class="login header__login">
                    <button class="btn btn--transp" data-toggle="modal" data-target="#exampleModal">Вход</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import Logo from './Logo'
    export default {
        name: 'Header',
        components: {
            Logo
        },
        data: function () {
            return {
                headerItems: [
                    {link: '#news', name: 'Новости'},
                    {link: '#timetable', name: 'Расписание'},
                    {link: '#payment', name: 'Оплата'},
                    {link: '#gallery', name: 'Галерея'},
                    {link: '#contacts', name: 'Контакты'},
                ],
                showMenu: false
            }
        }
    }
</script>