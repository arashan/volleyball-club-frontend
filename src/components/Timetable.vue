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
                        <span class = "tableCell" v-show="isSpanVisible(i, index)" >
                            {{col}}
                        </span>
                    </td>
                </tr>

                </tbody>
            </table>
        </div>

        <input ref="inputCell"
               type="text"
               v-model="currentCellValue"
               v-show="currentCell"
               @keyup.13="saveCell"
               @keyup.esc="cancelSave"
               @blur="cancelSave"
        />

        <!--<date-picker v-model="value12" lang="en" type="time" format="HH:mm:ss" placeholder="Select Time"></date-picker>-->
        <!--<div class="timepicker-wrapper" ref="inputCell">
            <datetime-picker
                    v-model="currentCellValue"
                    lang="ru"
                    type="time"
                    format="HH:mm"
                    placeholder="Выберите Время"
                    v-show="currentCell"
                    @change="blurFunct"
            />
        </div>-->

    </div>
</template>

<script>
    export default {
        name: "Timetable",
        data: function () {
            return {
                weekDays: ["Пн","Вт","Ср","Чт","Пт","Сб","Вс"],
                timetable: [
                    ['X', '', '', '', '', '', '' ],
                    ['', '', '', 'X', '', '', '' ],
                    ['', 'X', '', '', '', '', '' ],
                    ['', '', '', '', '', 'X', '' ],
                    ['X', '', '', '', '', '', '' ]

                ],
                currentCell: null,
                currentCellValue: null
            }
        },
        watch: {
            /*currentCellValue() {
                this.timetable[this.currentCell.row][this.currentCell.col] = this.currentCellValue;
                this.currentCell = null;
            }*/
        },
        methods : {
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
                }, 500);
            },
            saveCell() {
                this.timetable[this.currentCell.row][this.currentCell.col] = this.currentCellValue;
                this.currentCell = null;
            },
            cancelSave() {
                this.currentCell = null;
            }
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