document.addEventListener('DOMContentLoaded', () => {
    // Check if carInventory is already in local storage
    if (!localStorage.getItem('carInventory')) {
        // Initialize carInventory with default values
        const carInventory = {
            'V00001': { make: 'Toyota', model: 'Camry', status: 'Available' },
            'V00002': { make: 'Toyota', model: 'Camry', status: 'Available' },
            'V00003': { make: 'Honda', model: 'Accord', status: 'Available' },
            'V00004': { make: 'Honda', model: 'Accord', status: 'Available' },
            'V00005': { make: 'Hyundai', model: 'Sonata', status: 'Available' },
            'V00006': { make: 'Hyundai', model: 'Sonata', status: 'Available' },
            'V00007': { make: 'Nissan', model: 'Altima', status: 'Available' },
            'V00008': { make: 'Nissan', model: 'Altima', status: 'Available' },
            'V00009': { make: 'Kia', model: 'K5', status: 'Available' },
            'V00010': { make: 'Kia', model: 'K5', status: 'Available' },
            'V00011': { make: 'Ford', model: 'F-150', status: 'Available' },
            'V00012': { make: 'Ford', model: 'F-150', status: 'Available' },
            'V00013': { make: 'Chevrolet', model: 'Silverado 1500', status: 'Available' },
            'V00014': { make: 'Chevrolet', model: 'Silverado 1500', status: 'Available' },
            'V00015': { make: 'Ram', model: '1500', status: 'Available' },
            'V00016': { make: 'Ram', model: '1500', status: 'Available' },
            'V00017': { make: 'Toyota', model: 'Tacoma', status: 'Available' },
            'V00018': { make: 'Toyota', model: 'Tacoma', status: 'Available' },
            'V00019': { make: 'GMC', model: 'Sierra 1500', status: 'Available' },
            'V00020': { make: 'GMC', model: 'Sierra 1500', status: 'Available' },
            'V00021': { make: 'Toyota', model: 'RAV4', status: 'Available' },
            'V00022': { make: 'Toyota', model: 'RAV4', status: 'Available' },
            'V00023': { make: 'Honda', model: 'CR-V', status: 'Available' },
            'V00024': { make: 'Honda', model: 'CR-V', status: 'Available' },
            'V00025': { make: 'Ford', model: 'Explorer', status: 'Available' },
            'V00026': { make: 'Ford', model: 'Explorer', status: 'Available' },
            'V00027': { make: 'Hyundai', model: 'Tucson', status: 'Available' },
            'V00028': { make: 'Hyundai', model: 'Tucson', status: 'Available' },
            'V00029': { make: 'Subaru', model: 'Outback', status: 'Available' },
            'V00030': { make: 'Subaru', model: 'Outback', status: 'Available' },
            'V00031': { make: 'Honda', model: 'Civic', status: 'Available' },
            'V00032': { make: 'Honda', model: 'Civic', status: 'Available' },
            'V00033': { make: 'Toyota', model: 'Corolla', status: 'Available' },
            'V00034': { make: 'Toyota', model: 'Corolla', status: 'Available' },
            'V00035': { make: 'Mazda', model: '3', status: 'Available' },
            'V00036': { make: 'Mazda', model: '3', status: 'Available' },
            'V00037': { make: 'Hyundai', model: 'Elantra', status: 'Available' },
            'V00038': { make: 'Hyundai', model: 'Elantra', status: 'Available' },
            'V00039': { make: 'Kia', model: 'Forte', status: 'Available' },
            'V00040': { make: 'Kia', model: 'Forte', status: 'Available' }
        };
        localStorage.setItem('carInventory', JSON.stringify(carInventory));
    }
});