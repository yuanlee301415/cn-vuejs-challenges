import type {SetupContext} from "vue";
import {h} from 'vue'

type Props = {
    disabled: boolean
}

export default {
    props: ['disabled'],
    emits: ['customClick'],
    setup(props: Props, {slots, emit}: SetupContext) {
        console.log('props:', props)
        return () => h('button', {
            disabled: props.disabled,
            onclick: (event: Event) => emit('customClick', event)
        }, slots.default?.())
    }
}
