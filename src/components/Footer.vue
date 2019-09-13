<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__copyright">All rights reserved 2019</div>
                <ul class="social-menu">
                    <li class="social-menu__li" v-for="(item, i) in socials" :key="i"><a :class="item.class" :href="item.link">{{item.name}}</a></li>
                </ul>
                <ul class="footer-contacts">
                    <li class="footer-contacts__li"><a href="#">whatsapp</a></li>
                    <li><a href="#">Telegram</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data: function () {
            return {
                socials: [
                    {
                        "name": "fb",
                        "link" : "#",
                        class: "social-menu__fb"
                    },
                    {
                        "name": "tw",
                        "link" : "#",
                        class: "social-menu__tw"
                    },
                    {
                        "name": "inst",
                        "link" : "#",
                        class: "social-menu__inst"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>