import VFJButtonInput   from './columns/VFJButtonInput/VFJButtonInput.vue'
import VFJCheckboxInput from './columns/VFJCheckboxInput/VFJCheckboxInput.vue'
import VFJColorInput    from './columns/VFJColorInput/VFJColorInput.vue'
import VFJDateInput     from './columns/VFJDateInput/VFJDateInput.vue'
import VFJFileInput     from './columns/VFJFileInput/VFJFileInput.vue'
import VFJImage         from './columns/VFJImage/VFJImage.vue'
import VFJRadioBtnInput from './columns/VFJRadioBtnInput/VFJRadioBtnInput.vue'
import VFJRangeInput    from './columns/VFJRangeInput/VFJRangeInput.vue'
import VFJSelectInput   from './columns/VFJSelectInput/VFJSelectInput.vue'
import VFJText          from './columns/VFJText/VFJText.vue'
import VFJTextareaInput from './columns/VFJTextareaInput/VFJTextareaInput.vue'
import VFJTextInput     from './columns/VFJTextInput/VFJTextInput.vue'
import VFJNumber        from './columns/VFJNumber/VFJNumber.vue'

import VFJTabsSection    from './layout/VFJTabsSection.vue'
import VFJComponentGroup from './layout/VFJComponentGroup.vue'
import VFJLoopFieldGroup from './layout/VFJLoopFieldGroup/VFJLoopFieldGroup.vue'

export const COMPONENTS_REFS = {
    'I_BUTTON' : VFJButtonInput,
    'I_CHECKBOX' : VFJCheckboxInput,
    'I_COLOR' : VFJColorInput,
    'I_DATE' : VFJDateInput,
    'I_FILE' : VFJFileInput,
    '_IMAGE' : VFJImage,
    'I_RADIO' : VFJRadioBtnInput,
    'I_RANGE' : VFJRangeInput,
    'I_SELECT' : VFJSelectInput,
    '_TEXT' : VFJText,
    'I_TEXTAREA' : VFJTextareaInput,
    'I_TEXT' : VFJTextInput,
    'I_NUMBER' : VFJNumber,

    'V_TABS' : VFJTabsSection,
    'V_GROUP' : VFJComponentGroup,
    'V_LOOP' : VFJLoopFieldGroup
}