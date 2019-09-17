<template>
    <div class="page timetable">
        <h2 class="page__title">Расписание</h2>
        <div class="page__inner">
            <table class="table table-bordered" disable-dbl-tap-zoom>
                <thead>
                <tr>
                    <th v-for="(day, index) in weekDays" :key="index">{{day}}</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(rows, i) in timetable" :key="i">
                    <td v-for="(col, index) in rows" :key="index" @dblclick="editCell({'row': i, 'col': index}, $event)" class="disable-dbl-tap-zoom">
                        <span class = "tableCell" v-show="isSpanVisible(i, index)">
                            {{ formatTime(col) }}
                        </span>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>

<!--        <input ref="inputCell"
               type="text"
               class="form-control"
               v-model="currentCellValue"
               v-show="currentCell"
               @keyup.13="saveCell"
               @keyup.esc="cancelSave"
               @blur="cancelSave"
        />-->

        <!--<date-picker v-model="value12" lang="en" type="time" format="HH:mm:ss" placeholder="Select Time"></date-picker>-->
        <div class="timepicker-wrapper" ref="inputCell">
            <datetime-picker
                    :time-picker-options="timePickerOptions"
                    v-model="currentCellValue"
                    lang="ru"
                    type="time"
                    format="HH:mm"
                    placeholder="Выберите Время"
                    v-show="currentCell"
                    @change="saveCell"
            />
        </div>

    </div>
</template>

<script>
    const moment = require('moment');
    export default {
        name: "Timetable",
        data: function () {
            return {
                weekDays: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
                timetable: null,
                currentCell: null,
                currentCellValue: null,
                timePickerOptions:{
                    start: '07:00',
                    step: '00:15',
                    end: '21:30'
                }
            }
        },
        watch: {
            /*currentCellValue() {
                this.timetable[this.currentCell.row][this.currentCell.col] = this.currentCellValue;
                this.currentCell = null;
            }*/
        },
        methods : {
            prepareData(data) {
                /*return data.map(function(row) {
                    return row.map(function(col) {
                        let colVal = col !== '' ? new Date(col).getTime() : new Date('2019-01-01T01:00').getTime();
                        return colVal;
                    })
                });*/
                return data;
            },
            loadData() {
                const data = require("../assets/data/timetable.json");
                this.timetable = this.prepareData(data);
            },
            isSpanVisible(row, col) {
                if (this.currentCell) {
                    if (this.currentCell.row === row && this.currentCell.col === col) {
                        return false;
                    }
                }

                return true;
            },
            editCell(cell, event) {
                event.preventDefault();
                let td = event.target.closest("td");
                td.appendChild(this.$refs.inputCell);
                this.currentCell = cell;
                this.currentCellValue = this.timetable[cell.row][cell.col];

                setTimeout(() => {
                    this.$refs.inputCell.focus();
                }, 100);
            },
            saveCell() {
                this.timetable[this.currentCell.row][this.currentCell.col] = this.currentCellValue;
                this.currentCell = null;
            },
            cancelSave() {
                this.currentCell = null;
            },
            formatTime(colVal) {
                let res = '';
                if (Date.parse(colVal)) {
                    let ddate = moment(colVal);//new Date(colVal).getTime();
                    res = ddate.format('hh:mm')
                }
                return res;
            }
        },
        mounted() {
            this.loadData();
        }
    }
</script>

<style scoped>
    .tableCell {
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
    }
    .timepicker-wrapper {
        position: relative;
    }

    .disable-dbl-tap-zoom {
        touch-action: manipulation;
    }
</style>