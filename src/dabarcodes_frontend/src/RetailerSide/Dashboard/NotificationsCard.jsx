// const NotificationsCard = ({ title, description, showActions }) => {
//     const descriptionParagraphs = description.split('\n\n');
   
//      return (
//        <>
//          <h4 className="text-lg font-semibold mb-2">{title}</h4>
//     <div className="bg-white p-4 shadow-sm mb-4 border-l-2 border-blue-500">
//   {descriptionParagraphs.map((paragraph, index) => (
//            <p key={index} className="text-gray-600 mb-4">
//              {paragraph}
//            </p>
//          ))}
//          {showActions && (
//            <div className="flex space-x-4">
//              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Approve</button>
//              <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg">Reject</button>
//            </div>
//          )}
//        </div>
//        </>
//      );
//    };
   
//    export default NotificationsCard;