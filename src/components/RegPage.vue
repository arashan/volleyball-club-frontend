<template>
    <div class="page registry">
        <h2 class="page__title">Регистрация</h2>
        <div class="page__inner">
            <form class="registry-form">
                <div class="form-group row">
                    <label for="name" class="col-sm-2 col-md-3 col-lg-2 col-form-label">Имя</label>
                    <div class="col-sm-10 col-md-9 col-lg-10">
                        <input id="name" type="text" class="form-control" placeholder="Имя" required v-filter="'[a-zA-Zа-яА-я]'" v-model="name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="surname" class="col-sm-2 col-md-3 col-lg-2 col-form-label">Фамилия</label>
                    <div class="col-sm-10 col-md-9 col-lg-10">
                        <input id="surname" type="text" class="form-control" placeholder="Фамилия" required v-filter="'[a-zA-Zа-яА-я]'" v-model="lastname">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="patronymic" class="col-sm-2 col-md-3 col-form-label col-lg-2">Отчество</label>
                    <div class="col-sm-10 col-md-9 col-lg-10">
                        <input id="patronymic" type="text" class="form-control" placeholder="Отчество" v-filter="'[a-zA-Zа-яА-я]'" v-model="middlename">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="birthDate" class="col-sm-2 col-md-3 col-form-label col-lg-2">Дата рождения</label>
                    <div class="col-sm-2 col-md-3 col-lg-2">
                        <input id="birthDate" type="date" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-md-3 col-form-label col-lg-2">Эл почта</label>
                    <div class="col-sm-10 col-md-9 col-lg-10">
                        <input id="email" type="text" class="form-control" placeholder="you@example.com" required>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="phone_num" class="col-sm-2 col-md-3 col-form-label col-lg-2">Телефон</label>
                        <phone-mask-input
                                id="phone_num"
                                v-model="phone"
                                autoDetectCountry
                                showFlag
                                wrapperClass="phone-num col-sm-2 col-md-3 col-lg-2"
                                inputClass="form-control"
                                flagClass="flag-example"
                                placeholder="+(996) 700 999 999"
                                required
                        />
                </div>
                <div class="form-group row mt-4">
                    <h4 class="title--acsent col-sm-12">Дополнительная информация</h4>
                </div>
                <div class="form-group form-inline">
                    <label for="height_user" class="col-form-label col-lg-1 col-md-1">Рост</label>
                    <input id="height_user" type="number" class="form-control col-lg-2 col-md-2 col-sm-10" placeholder="Рост" v-filter="'[0-9]'" v-model="height">
                    <label for="chest_size" class="col-form-label col-lg-1 col-md-1">ОГ</label>
                    <input id="chest_size" type="number" class="form-control col-lg-2 col-md-2 col-sm-10" placeholder="Обхват груди" v-filter="'[0-9]'" v-model="chest">
                    <label for="waist_size" class="col-form-label col-lg-1 col-md-1">ОТ</label>
                    <input id="waist_size" type="number" class="form-control col-lg-2 col-md-2 col-sm-10" placeholder="Обхват талии" v-filter="'[0-9]'" v-model="waist ">
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
                phone: null,
                waist: '',
                chest: ''
            }
        }
    }
</script>