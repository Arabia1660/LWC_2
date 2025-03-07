import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CaseEditForm extends LightningElement {
    @api recordId; // ID of the case record

    handleSuccess(event) {
        // Show success toast notification
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Success',
                message: 'Case updated successfully!',
                variant: 'success',
            })
        );
    }
}