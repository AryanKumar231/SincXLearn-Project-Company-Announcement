function mapCategoryToValue(category) {
    switch (category) {
        case 'policy':
            return 'Policy Update';
        case 'compliance':
            return 'Compliance Alert';
        case 'it':
            return 'IT Notice';
        case 'event':
            return 'Event Notification';
        default:
            return '';
    }
}



export default mapCategoryToValue