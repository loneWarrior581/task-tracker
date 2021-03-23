<template>
    <header>
        <h1>{{title}} </h1>
        <Button @show-hide="$emit('show-hide') " :text="showAddTask?'Close':'Add Task' " 
         :color="showAddTask ? 'red':'green'" />
    </header>
</template>

<script>
import Button from './Button'
export default {
    name:'Header',
    components:{
        Button
    },
    props:{
        title:{
            type:String,
            default:'Say hi'
        },
        showAddTask:Boolean
    }
}
</script>

<style scoped>
    header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px ;
    }
</style>