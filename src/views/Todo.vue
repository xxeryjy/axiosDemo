<template>
    <div class="todo">
        <div class="bg-info py-2">
            <div class="container">
                <h4 class="text-white">任务计划列表</h4>
            </div>
        </div>
        <div class="container py-5">
            <h4 class="mb-3">添加任务：</h4>
            <input type="text" class="form-control" v-model="message" :placeholder="placeholderText" @keyup.enter="enterFn">
        </div>
        <div class="container">
            <h4 class="mb-3">列表任务：</h4>
            <ul class="list-unstyled  todo-list" v-show="list.length">
                <li class="todo " v-for="item in list"
                    :class="{completed:item.isComplete,editing:item===edtorTodos}"
                >
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="item.isComplete" />
                        <label @dblclick="edtorTodo(item)" class="mb-0">{{item.title}}</label>
                        <button class="destroy" @click="delFn(item)"></button>
                    </div>
                    <input
                            class="edit"
                            type="text"
                            v-model="item.title"
                            @blur="edtoEnd(item)"
                            @keyup.enter="edtoEnd(item)"
                            @keyup.esc="cancelEdit(item)"
                    />
                </li>

            </ul>
            <div class="" v-show="this.list==0">暂无数据...</div>
        </div>
    </div>
</template>
<script>

    export default {
        name:'todo',
        data(){
            return{
                message:'',
                placeholderText:'例如：吃饭睡觉打豆豆；    提示：+回车即可添加任务',
                edtorTodos:'',
                beforeTitle:'',
                list:[
                    {
                        title: '吃饭',
                        isComplete:false,

                    }
                ],
                isCheck:false
            }
        },
        methods:{
            enterFn(){//添加
                if (this.message == '') {return;}
                this.list.push({
                    title:this.message,
                    isComplete: false
                })
                this.message = ''
            },
            edtorTodo(item){//编辑
               console.log(item)
               this.beforeTitle = item.title
               this.edtorTodos = item
            },
            edtoEnd(item){//编辑完成
                if (item.title==""){
                    item.title = this.beforeTitle;
                }
                this.edtorTodos=""
            },
            delFn(item){//删除
                var index = this.list.indexOf(item);
                this.list.splice(index,1)
            },
            cancelEdit(item){//取消编辑
                item.title = this.beforeTitle;
                this.beforeTitle = '';
                this.edtorTodos='';
            }

        }

    }
</script>



<style>
@import "../assets/css/style.css";
</style>
<style lang="scss" scoped>

</style>