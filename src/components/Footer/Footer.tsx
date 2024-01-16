import Paragraph from "../../elements/Paragraph";
function Footer() {
   return (
     <footer className="fixed bottom-0 bg-gray-800  py-4 text-center w-full">
         <Paragraph size="sm" textColor="text-white">&copy; 2023. All rights reserved.</Paragraph>
     </footer>
   );
 }
 export default Footer