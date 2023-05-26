import Image from '../Images/logo192.png'

const Header = (props) => {
    return(
<div className="container" >
   <div >
    <table >
        <tbody>
        <tr >
            <td><img src={Image} className="img-thumbnail" width={50} height={50}></img> </td>
            <td className='p-2'>
            <h1 >Contacts</h1>
            </td>
        </tr>
        </tbody>
    </table>
   
  
   </div>
</div>
    );
}

export default Header;