<template>
    <div class="page registry">
        <h2 class="page__title">Регистрация</h2>
        <div class="page__inner">
            <form>
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-form-label">Имя</label>
                    <div class="col-sm-10">
                        <input id="name" type="text" class="form-control" placeholder="Имя" required v-filter="'[a-zA-Zа-яА-я]'" v-model="name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="surname" class="col-sm-2 col-form-label">Фамилия</label>
                    <div class="col-sm-10">
                        <input id="surname" type="text" class="form-control" placeholder="Фамилия" required v-filter="'[a-zA-Zа-яА-я]'" v-model="lastname">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="patronymic" class="col-sm-2 col-form-label">Отчество</label>
                    <div class="col-sm-10">
                        <input id="patronymic" type="text" class="form-control" placeholder="Отчество" v-filter="'[a-zA-Zа-яА-я]'" v-model="middlename">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="height_user" class="col-sm-2 col-form-label">Рост</label>
                    <div class="col-sm-10">
                        <input id="height_user" type="number" class="form-control" placeholder="Рост" v-filter="'[0-9]'" v-model="height">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Эл почта</label>
                    <div class="col-sm-10">
                        <input id="email" type="text" class="form-control" placeholder="you@example.com" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="pwd" class="col-sm-2 col-form-label">Пароль</label>
                    <div class="col-sm-10">
                        <input id="pwd" type="password" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="pwd_repeat" class="col-sm-2 col-form-label">Повторите пароль</label>
                    <div class="col-sm-10">
                        <input id="pwd_repeat" type="password" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="phone_num" class="col-sm-2 col-form-label">Телефон</label>
                    <div class="col-sm-10">
                        <!--<input id="phone_num" type="text" class="form-control" placeholder="+(996) 700 999 999" required>-->
                        <phone-mask-input
                                id="phone_num"
                                v-model="phone"
                                autoDetectCountry
                                showFlag
                                wrapperClass="wrraper-example"
                                inputClass="input-example"
                                flagClass="flag-example"
                                placeholder="+(996) 700 999 999"
                                required
                        />
                    </div>
                </div>
                <div class="form-group row row--center">
                    <button class="btn btn-primary" type="submit">Готово</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RegPage',
        data: function () {
            return {
                name: '',
                lastname: '',
                middlename: '',
                height: '',
                phone: ''
            }
        }
    }
</script>