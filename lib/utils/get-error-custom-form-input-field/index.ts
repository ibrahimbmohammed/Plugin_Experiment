import { FieldInputProps, FormikErrors } from 'formik';
import React from 'react';

function getErrorCustomFormInputField(
    formErrors: FormikErrors<any>,
    fieldObj: FieldInputProps<any>,
): React.ReactNode {
    let error: React.ReactNode;

    if (typeof formErrors === 'object') {
        const splitFieldName: Array<any> = fieldObj.name.split('.');
        if (splitFieldName.length > 1) {
            const [fieldArrayName, _fieldArrayIndex, fieldName] = splitFieldName;
            const fieldArrayIndex = Number(_fieldArrayIndex);
            if (Object.prototype.hasOwnProperty.call(formErrors, fieldArrayName)) {
                const errorsArray = formErrors[fieldArrayName] as [];
                for (let i = 0; i < errorsArray.length; i += 1) {
                    if (i === fieldArrayIndex) {
                        const errorField = errorsArray[i];
                        if (errorField) {
                            return errorField[fieldName];
                        }
                    }
                }
            }
        } else {
            return formErrors[fieldObj.name] as React.ReactNode;
        }
    }
    return error;
}

export default getErrorCustomFormInputField;
