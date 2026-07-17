import notesnoter from '../../assets/notesnoter.png';

export const Navbar = () => {
    return (
        <header className='flex align-items-center border-bottom-10'>
            <div className='size-96px'>
                <img src={notesnoter} alt='notesnoterlogo' className='width-100 height-100'/>
            </div>
            <div>
                <span><h2 className='h2-color'>NotesNoter</h2></span>
            </div>
        </header>
    )
}