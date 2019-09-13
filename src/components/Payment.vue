<template>
    <div class="page payment">
        <h2 class="page__title">Оплата</h2>
        <div class="page__inner">
            <h4 class="mb-1">2019г</h4>
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>ФИО / Месяц</th>
                    <th v-for="(month, i) in months" :key="i">{{month}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(user, j) in users" :key="j">
                    <td>{{user.fio}}</td>
                    <td v-for="(month, i) in months" :key="i"></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Payment",
        data: function () {
            return {
                users: [
                    {"fio": "Иванов И. И."},
                    {"fio": "Петров Т. А."},
                    {"fio": "Чернов К. У."}
                ],
                months : ["Янв.", "Фев.", "Мрт.", "Апр.", "Май.", "Июн.", "Июл.", "Авг.", "Сен.", "Окт.", "Нбр.", "Дек."]
            }
        }
    }
</script>

<style scoped>

</style>