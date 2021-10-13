export default{
    mame:'MyButton',
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">click me {{count}}</button>'
}