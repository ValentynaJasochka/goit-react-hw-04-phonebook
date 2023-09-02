import { useState } from 'react';
import { Label, Input, Form, Button } from './ContactForm.styled';
export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const onChangeInput = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const addContact = event => {
    event.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={addContact}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeInput}
        />
      </Label>
      <Label>
        Phone number
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeInput}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
// export class ContactForm extends Component {

//   state = {
//     name: '',
//     number: '',
//   };

//   addContact = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   onChangeInput = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   reset = () =>
//     this.setState({
//       name: '',
//       number: '',
//     });

//   render() {
//     const { name, number } = this.state;

//     return (
//       <Form onSubmit={this.addContact}>
//         <Label>
//           Name
//           <Input
//             type="text"
//             name="name"
//             value={name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.onChangeInput}
//           />
//         </Label>
//         <Label>
//           Phone number
//           <Input
//             type="tel"
//             name="number"
//             value={number}
//             pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.onChangeInput}
//           />
//         </Label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     );
//   }
// }
