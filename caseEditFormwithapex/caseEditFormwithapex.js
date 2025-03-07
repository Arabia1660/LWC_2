import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import updateCase from '@salesforce/apex/CaseController.updateCase';

export default class CaseEditFormwithapex extends LightningElement {

    @api recordId; // ID of the current Case record
    @track caseFields = {};

    handleChange(event) {
        const field = event.target.name;
        const value = event.target.value;
        this.caseFields = { ...this.caseFields, [field]: value }; // Track changes dynamically
    }

    handleSubmit() {
        // Add Case Id to the fields being updated
        this.caseFields.Id = this.recordId;

        // Call Apex to update the Case
        updateCase({ caseRecord: this.caseFields })
            .then(() => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Case updated successfully',
                        variant: 'success',
                    })
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error updating case',
                        message: error.body.message,
                        variant: 'error',
                    })
                );
            });
    }
}