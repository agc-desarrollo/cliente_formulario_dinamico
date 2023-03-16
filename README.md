# Vue3 Cliente Formulario Dinámico

# Change Log
- **0.1.6**: Los campos del formulario toman los datos cargados en el mismo
- **0.1.5**: Se realiza consulta de información de formulario
- **0.1.4**:  Se agrega tipo de control input numerico diferenciado del control de texto; Se agrega posibilidad de configurar placeholder;
Las opciones de configuración de los controles ahora se definen en composable; Se arreglan bug de loop de campos que no generaba correctamente la estructura de datos, si se eliminaban registros; Se mejora generación de estructura HTML
- **0.1.3**:  model llevado a composable; componente de loops ahora sincroniza al modelo general; componente de loops ahora sincroniza al modelo general; Se reemplaza prev_model por model; En Loops: se mejora el almacenamiento de la info cargada en el modelo, se arregla el eliminar; soulución a bug, campos que no recibian el modelo como parametro; refactor se intercambia html_def por content; Se simplifican los nombres de los componetes; Se elimina CompInsert por que se trata de un componente redundante; Los campos de tipo select, ahora usan el inputcompostable; Se define composable para inputs, se aplica a texto, fecha, range y textarea, luego se aplicacra al resto de campos; Se simplifica configuracion basica de componentes de tipo input; Todos los componentes reciben acceso al modelo definido en componete FormularioJSON; Se arregla evento input del control de tipo range; se modifica css_class por class; Se mejora manejo de eventos; Reorganización estructura de directorios.
- **0.1.2**: Corrección en rollup.config.js con respecto a generación de build minificado
- **0.1.1**: Proyecto base para avanzar con desarrollo del componente