import { AeFormBuilder } from 'ae-dynamic-form';

export const commentForm = new AeFormBuilder()
    .title('Comment Form')
    .newControl('text').type('text-area').required().minLength(1).maxLength(50)
    .icon('comment').placeholder('Type Comment').label('Comment').buildFormControl()

    .submitButtonLabel('Comment')
    .buildForm();


export const issueForm = new AeFormBuilder().title('Issue Form')
    .newControl('title').required().maxLength(20)
    .placeholder('Type Title').label('Title').buildFormControl()

    .newControl('description').required().maxLength(400).minLength(10)
    .placeholder('Type Description').label('Description').buildFormControl()

    .newControl('due').type('date').required()
    .placeholder('Type Due Date').label('Due').buildFormControl()

    .submitButtonLabel('Create')
    .buildForm();



export const messageForm = new AeFormBuilder()
    .newControl('subject').maxLength(20).required()
    .icon('subject').placeholder('Type Subject').label('Subject').buildFormControl()

    .newControl('body').maxLength(500).required()
    .icon('message').placeholder('Type Message').label('Message').buildFormControl()


    .submitButtonLabel('Send')
    .buildForm();


export const projectForm = new AeFormBuilder()

    .title('Project Form')

    .newControl('name').autocomplete('off').required()
    .icon('edit').placeholder('Type Project Name').label('Project Name').buildFormControl()


    .newControl('description').autocomplete('off').required().minLength(10).maxLength(100)
    .icon('description').placeholder('Type description').label('Description')
    .buildFormControl()

    .submitButtonLabel('Create Project')
    .buildForm();


export const userForm = new AeFormBuilder()
    .title('User Form')
    .newControl('firstName').required().maxLength(50).placeholder('Type First Name').label('First Name').buildFormControl()
    .newControl('lastName').required().maxLength(50).placeholder('Type Last Name').label('Last Name').buildFormControl()
    .newControl('email').type('email').required().placeholder('Type Email').label('Email').buildFormControl()

    .newControl('role').type('select').required()
    .options([
        { icon: 'admin_panel_settings', value: 'admin', label: 'Admin' },
        { icon: 'developer_mode', value: 'developer', label: 'Developer' },
        { icon: 'next_plan', value: 'scrummaster', label: 'Scrummaster' }
    ]).buildFormControl()
    .buildForm();

