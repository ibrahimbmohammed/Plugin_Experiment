export function checkIfImageIsTooBig(files?: [File]): boolean {
    let valid = true;
    if (files) {
        const file = files[0];
        if (file) {
            const size = file.size / 1024 / 1024;
            if (size > 1.12) {
                valid = false;
            }
            return valid;
        }
        valid = false;
    }
    return valid;
}

export function checkIfImageIsTooBigThan5MB(files?: [File]): boolean {
    let valid = true;
    if (files) {
        const file = files[0];
        if (file) {
            const size = file.size / 1024 / 1024;
            if (size > 5.12) {
                valid = false;
            }
            return valid;
        }
        valid = false;
    }
    return valid;
}

export function isFileInputEmpty(files: [File]): boolean {
    let valid = true;
    if (files) {
        const file = files[0];
        if (file) {
            return valid;
        }
        valid = false;
    }
    return valid;
}

export function checkIfFileIsTooBig(file?: File): boolean {
    let valid = true;
    if (file) {
        const size = file.size / 1024 / 1024;
        if (size > 10) {
            valid = false;
        }
        return valid;
    }
    return valid;
}

export function checkIfImageIsCorrectType(files?: [File]): boolean {
    let valid = true;
    if (files) {
        const file = files[0];
        if (file) {
            if (
                !['image/jpeg', 'image/jpg', 'image/gif', 'image/png'].includes(
                    file.type.toLowerCase(),
                )
            ) {
                valid = false;
            }
            return valid;
        }
        valid = false;
    }
    return valid;
}

export function checkIfCertificateFilesAreCorrectType(files?: [File]): boolean {
    let valid = true;
    if (files) {
        const file = files[0];
        if (file) {
            if (
                !['image/jpeg', 'image/jpg', 'application/pdf', 'image/png'].includes(
                    file.type.toLowerCase(),
                )
            ) {
                valid = false;
            }
            return valid;
        }
    }
    return valid;
}

export function checkIfEventDocumentsAreCorrectType(files?: [File]): boolean {
    let valid = true;
    if (files) {
        const file = files[0];
        if (file) {
            if (!['application/pdf'].includes(file.type.toLowerCase())) {
                valid = false;
            }
            return valid;
        }
    }
    return valid;
}
