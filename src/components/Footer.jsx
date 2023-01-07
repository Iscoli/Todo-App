

    function Footer(){
      const footerYear = new Date().getFullYear()
      return(<div className="footer">
       <p>Copyright &copy; {footerYear} All rights reserves</p>
      </div>)
    }

    export default Footer;