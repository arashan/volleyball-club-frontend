<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__copyright">All rights reserved 2019</div>
                <ul class="social-menu">
                    <li class="social-menu__li" v-for="(item, i) in socials" :key="i"><a class="social-menu-item" :class="item.class" :href="item.link"></a></li>
                </ul>
                <ul class="social-menu footer__conts">
                    <li class="social-menu__li"><a href="#" class="social-menu-item whatsp"></a></li>
                    <li class="social-menu__li"><a href="#" class="social-menu-item tlgr"></a></li>
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
                        "name": "facebook",
                        "link" : "#",
                        class: "fb"
                    },
                    {
                        "name": "twitter",
                        "link" : "#",
                        class: "tw"
                    },
                    {
                        "name": "instagram",
                        "link" : "#",
                        class: "inst"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>