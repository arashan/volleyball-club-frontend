<template>
    <div class="page registry">
        <h2 class="page__title">Регистрация</h2>
        <div class="page__inner">
            <form class="registry-form">
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
                    <label for="birthDate" class="col-sm-2 col-form-label">Дата рождения</label>
                    <div class="col-sm-2">
                        <input id="birthDate" type="date" class="form-control">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-2 col-form-label">Эл почта</label>
                    <div class="col-sm-10">
                        <input id="email" type="text" class="form-control" placeholder="you@example.com" required>
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
                <div class="form-group row">
                    <h4 class="title--acsent col-sm-12">Дополнительная информация</h4>
                </div>
                <div class="form-group form-inline">
                    <label class="form-check-label col-form-label col-sm-1">
                        <input class="form-check-input" type="radio" id="inlineCheckbox1" name="opt1" value="option1">Жен
                    </label>
                    <label class="form-check-label col-form-label col-sm-1">
                        <input class="form-check-input" type="radio" id="inlineCheckbox2" name="opt1" value="option1">Муж
                    </label>

                    <label for="height_user" class="col-sm-1 col-form-label">Рост</label>
                    <input id="height_user" type="number" class="form-control col-sm-2 mb-2 mr-sm-2 mb-sm-0" placeholder="Рост" v-filter="'[0-9]'" v-model="height">

                    <label for="chest_size" class="col-sm-1 col-form-label">ОГ</label>
                    <input id="chest_size" type="number" class="form-control col-sm-2 mb-2 mr-sm-2 mb-sm-0" placeholder="Обхват груди">

                    <label for="waist_size" class="col-sm-1 col-form-label">ОТ</label>
                    <input id="waist_size" type="number" class="form-control col-sm-2 mb-2 mr-sm-2 mb-sm-0" placeholder="Обхват талии">

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