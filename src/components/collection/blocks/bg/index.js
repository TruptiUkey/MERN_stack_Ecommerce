

function Bgimage() {
  const source = ['./../../../images/handcraft.avif','./../../../images/young-woman-standing-fashionable.avif','./../../../images/indian-pakistani-printed-lawn-frock.avif'];
    return (
         <div className='box' style={{
          backgroundImage:`url(${require('./../../../../images/indian-pakistani-printed-lawn-frock.avif')})`
        }}></div>
    );
  }
  
  export default Bgimage;