import { AeFormBuilder } from 'ae-dynamic-form';

export const commentForm = new AeFormBuilder()
    .newControl('text')
    .autocomplete('off')
    .placeholder('Type Comment')
    .label('Comment')
    .autocomplete('off')
    .type('text-area')
    .required()
    .minLength(1)

    .icon('comment')
    .buildFormControl()

    .submitButtonLabel('Comment')
    .buildForm();


export const issueForm = new AeFormBuilder()

    .newControl('title')
    .autocomplete('off')
    .label('Title')
    .placeholder('Type Title')
    .autocomplete('off')
    .required()

    .buildFormControl()

    .newControl('description')
    .autocomplete('off')
    .placeholder('Type Description')
    .label('Description')
    .required()

    .minLength(3)
    .buildFormControl()

    .newControl('due')
    .autocomplete('off')
    .placeholder('Type Due Date')
    .label('Due')
    .type('date')
    .required()
    .buildFormControl()

    .submitButtonLabel('Create Issue')
    .buildForm();



export const messageForm = new AeFormBuilder()
    .newControl('subject')
    .autocomplete('off')
    .label('Subject')
    .placeholder('Type Subject')
    .autocomplete('off')

    .required()
    .icon('subject')
    .buildFormControl()

    .newControl('body')
    .autocomplete('off')
    .label('Message')
    .placeholder('Type Message')

    .required()
    .icon('message')
    .buildFormControl()

    .submitButtonLabel('Send Message')
    .buildForm();


export const projectForm = new AeFormBuilder()

    .title('Project Form')

    .newControl('name')
    .autocomplete('off')
    .required()
    .icon('edit')
    .placeholder('Type Project Name')
    .label('Project Name')
    .buildFormControl()

    .newControl('description')
    .autocomplete('off')
    .required()
    .minLength(10)


    .icon('description')
    .placeholder('Type description')
    .label('Description')

    .buildFormControl()

    .submitButtonLabel('Create Project')
    .buildForm();


export const userForm = new AeFormBuilder()

    .title('User Form')

    .newControl('firstName')
    .autocomplete('off')
    .required()

    .placeholder('Type First Name')
    .label('First Name')
    .buildFormControl()

    .newControl('lastName')
    .autocomplete('off')
    .required()

    .placeholder('Type Last Name')
    .label('Last Name')
    .buildFormControl()

    .newControl('email')
    .autocomplete('off')
    .type('email')
    .required()
    .placeholder('Type Email')
    .label('Email')
    .buildFormControl()

    .newControl('role')
    .autocomplete('off')
    .type('select')
    .required()
    .options([
        { icon: 'admin_panel_settings', value: 'admin', label: 'Admin' },
        { icon: 'developer_mode', value: 'developer', label: 'Developer' },
        { icon: 'next_plan', value: 'scrummaster', label: 'Scrummaster' }
    ])
    .buildFormControl()
    .submitButtonLabel('Create User')
    .buildForm();

