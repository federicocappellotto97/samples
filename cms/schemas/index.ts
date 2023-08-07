import sample from './docs/sample'
import mediatype from './docs/mediatype'
import settings from './docs/settings'
import atoms from './components/atoms'
import molecules from './components/molecules'
import menu from './docs/menu'

const docTypes = [sample, mediatype, settings, menu]
export const schemaTypes = [...atoms, ...molecules, ...docTypes]
