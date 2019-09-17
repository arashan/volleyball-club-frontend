<template>
    <div class="pagination">
        <button type="button" class="pagination_btn pagination__left btn btn--transp" @click="changePage(prevPage)" v-if="hasPrev()">
            <
        </button>
        <div class="pagination__mid" >
           <ul class="pagination__list">
               <li v-if="hasFirst()"><a href="#" class="pagination__item" @click="changePage(1)">1</a></li>
               <li v-if="hasFirst()" class="">...</li>
               <li v-for="(page,i) in pages" :key="i" class="pagination__item">
                   <a href="#" :class="{ current: page===current }" @click.prevent="changePage(page)" >{{ page }}</a>
               </li>
               <li v-if="hasLast()" class="">...</li>
               <li v-if="hasLast()" class="pagination__item"><a href="#" @click="changePage(totalPages)">{{totalPages}}</a></li>
           </ul>
        </div>
        <button type="button" class="pagination_btn pagination__right btn btn--transp" @click="changePage(nextPage)" v-if="hasNext()">
            >
        </button>
    </div>
</template>

<script>
    export default {
        name: "Pagination",
        props: {
            current: {
                type: Number,
                default: 1
            },
            total: {
                type: Number,
                default: 0
            },
            perPage: {
                type: Number,
                default: 6
            },
            pageRange: {
                type: Number,
                default: 2
            }
        },
        computed : {
            pages() {
                let pages = [];

                for(let i=this.rangeStart;  i<=this.rangeEnd; i++) {
                    pages.push(i)
                }

                return pages;
            },
            rangeStart() {
                let start = this.current - this.pageRange;
                return start > 0 ? start : 1
            },
            rangeEnd() {
                let end = this.current + this.pageRange;
                return end < this.totalPages ? end : this.totalPages
            },
            nextPage() {
                return this.current + 1;
            },
            prevPage() {
                return this.current - 1;
            },
            totalPages() {
                return Math.ceil(this.total / this.perPage)
            }
        },
        methods: {
            hasFirst() {
                return this.rangeStart !== 1
            },
            hasLast() {
              return this.rangeEnd < this.totalPages
            },
            hasPrev() {
                return this.current > 1
            },
            hasNext() {
                return this.current < this.totalPages
            },
            changePage(page) {
                this.$emit('page-changed', page);
            }
        }
    }
</script>
