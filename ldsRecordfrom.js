import { LightningElement, track } from 'lwc';
import NAME_FIELDS from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

//const typeField = { objectApiName: 'Account', fieldApiName: 'Type' };
//const ratingField = { objectApiName: 'Account', fieldApiName: 'Rating' };

export default class LdsRecordfrom extends LightningElement {
   // using this we are only can see the relevent field of Account object
    @track fields = [
        {
            objectApiName: 'Account', fieldApiName: 'Type'
        },
        INDUSTRY_FIELD,
        NAME_FIELDS,
        {
            objectApiName: 'Account', fieldApiName: 'Rating'
        }
    ];
    // diffrent weya 
    // @track fields = [typeField, INDUSTRY_FIELD, NAME_FIELDS, ratingField];
    handleSuccess(event) {
        event.preventDefault();
        alert('Success');
        console.log(JSON.stringify(event.detail));
    }
    handleError(event) {
        event.preventDefault();
        console.log(JSON.stringify(event.detail));
    }
  
        handleSubmit(event) {
            // Prevent the default form submission behavior
            event.preventDefault();
        
            // Log a success message and the event details for debugging
            console.log('Record Submitted');
            console.log(JSON.stringify(event.detail));
        
            // Access and modify the fields from the form submission event
            let fields = event.detail.fields;
            fields.ParentId = ''; // Example: Set the ParentId field to an empty string
        
            // Resubmit the modified fields using the lightning-record-form component
            this.template.querySelector('lightning-record-form').submit(fields);
    }
    handleCancel(event) {
        event.preventDefault(); 
    }
    handleLoad(event) {
        event.preventDefault();  
    }
   
}
