export const STATUS = {
    DRAFT: 0,
    PUBLISHED: 1
}

export class FormConfigHTMLDef {
    class = ''
    content   = [] //FormConfigComponent
}

export class FormConfigComponent {
    component = ''
    params    = {}
    class = ''
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
    content = []
}

export class FormConfig {
    gral         = new FormConfigGeneralData()
    sections     = new FormConfigSections()
    data_origin  = {}
    field_rels   = []
}