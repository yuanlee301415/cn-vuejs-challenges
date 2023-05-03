import {h, defineComponent} from 'vue'

export default defineComponent({
    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },
    emits: ['customClick'],
    setup(props, {slots, emit}) {
        console.log('props:', props)
        return () => h('button', {
            disabled: props.disabled,
            onclick: (event: Event) => emit('customClick', event)
        }, slots.default?.())
    }
})
