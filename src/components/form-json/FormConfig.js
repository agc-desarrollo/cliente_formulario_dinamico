export const STATUS = {
    DRAFT: 0,
    PUBLISHED: 1
}

export class FormConfigHTMLDef {
    css_class = ''
    content   = [] //FormConfigComponent
}

export class FormConfigComponent {
    component = ''
    params    = {}
    css_class = ''
}

export class FormConfigGeneralData{
    status             = STATUS['DRAFT']
    title              = 'untitled'
    captcha_public_key = ''
    field_options      = {}
    submit_msg         = ''
}

export class FormConfigSections {
    component = 'VFJTabsSection'
    section_def = []
}

export class FormConfig {
    general_data = new FormConfigGeneralData()
    sections     = new FormConfigSections()
    runtime_data = {}
    field_rels   = []
}