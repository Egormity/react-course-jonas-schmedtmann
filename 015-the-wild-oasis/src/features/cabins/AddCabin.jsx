import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';
import CabinTable from './CabinTable';
import { useUser } from '../authentication/useUser';

export default function AddCabin() {
  const { isAdmin } = useUser();

  const disabled = false;

  return (
    <div>
      <Modal>
        <Modal.Open opens='cabin-form'>
          <Button disabled={disabled}>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name='cabin-form'>
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOnenModal, setIsOnenModal] = useState(false);

//   const onCloseModal = () => setIsOnenModal(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOnenModal(currentShow => !currentShow)}>Add New Cabin</Button>
//       {isOnenModal && (
//         <Modal onCloseModal={onCloseModal}>
//           <CreateCabinForm onCloseModal={onCloseModal} />
//         </Modal>
//       )}
//     </div>
//   );
// }
