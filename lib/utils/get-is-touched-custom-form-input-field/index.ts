import { FieldInputProps, FormikTouched } from 'formik';

function getIsTouchedCustomFormInputField(
    formTouches: FormikTouched<any>,
    fieldObj: FieldInputProps<any>,
): boolean {
    if (typeof formTouches === 'object') {
        const splitFieldName: Array<any> = fieldObj.name.split('.');
        if (splitFieldName.length > 1) {
            const [fieldArrayName, _fieldArrayIndex, fieldName] = splitFieldName;
            const fieldArrayIndex = Number(_fieldArrayIndex);
            if (Object.prototype.hasOwnProperty.call(formTouches, fieldArrayName)) {
                const touchedArray = formTouches[fieldArrayName] as [];
                for (let i = 0; i < touchedArray.length; i += 1) {
                    if (i === fieldArrayIndex) {
                        const touchedField = touchedArray[i];
                        return touchedField[fieldName];
                    }
                }
            }
        } else {
            return formTouches[fieldObj.name] as boolean;
        }
    }
    return false;
}

export default getIsTouchedCustomFormInputField;
