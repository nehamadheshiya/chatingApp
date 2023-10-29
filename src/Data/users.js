import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Neha Madeshiya",
      image:'https://media.licdn.com/dms/image/D4D03AQHDf8b8q2xZUQ/profile-displayphoto-shrink_800_800/0/1694112529324?e=1703721600&v=beta&t=QckYZflP5zIBcXOyLWJmxQraIFYKNB_h7rXPrwrhNO0',
      
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",
      contacts: [
        {
          id: 2,
          name: "Raju Kumar",
          image:
            "https://img.freepik.com/free-photo/indian-man-smiling-mockup-psd-cheerful-expression-closeup-portra_53876-143269.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
          chatlog: [
            {
              text: "Hi Neha,How are you!",
              timestamp: "11:21 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Raju. How are you!",
              timestamp: "11:22 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Neha.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Oky Bro !",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: " Neeraj",
          image:"https://img.freepik.com/free-photo/worldface-pakistani-guy-white-background_53876-146312.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
            // "https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
          chatlog: [
            {
              text: "Hi Neha!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Neeraj!! , How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where r u ??",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Rosee",
          image:
            "https://img.freepik.com/free-photo/portrait-beautiful-woman-wearing-traditional-sari-garment_23-2149565121.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
          chatlog: [
            {
              text: "Hi, Neha!",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Rosee. How are you!",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Neha.",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "r u busy??",
              timestamp: "10:04 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no!",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Alex",
          image:
            "https://img.freepik.com/free-photo/close-up-portrait-young-indian-man-with-beard-white-shirt-isolated-standing-smiling_155003-23823.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
          chatlog: [],
        },
        {
          id: 6,
          name: "Brother",
          image:
            "https://img.freepik.com/free-photo/handsome-smiling-man-wearing-green-shirt-standing-against-blue-background_662251-587.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
          chatlog: [
            {
              text:" Where is ur Big bro?",
              timestamp: "10:01 AM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know anything about that, bro",
              timestamp: "10:02 AM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure ?",
              timestamp: "10:03 AM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes,  I am sure",
              timestamp: "10:04 AM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right Bro...",
              timestamp: "10:05 AM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Uncle",
          image:"https://img.freepik.com/free-photo/portrait-smiling-cute-middle-aged-guy-posing-camera-against-gray-background_259150-57804.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
          chatlog: [
            {
              text: "Where are you bro ? ",
              timestamp: "10:06 AM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market",
              timestamp: "10:06 AM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ....",
              timestamp: "10:07 AM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "10:08 AM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "R u okay??",
              timestamp: "10:09 AM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Hmmmmm!",
              timestamp: "10:09 AM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Mahi",
          image:"https://img.freepik.com/free-photo/cheerful-traditional-indian-woman-white-background-studio-shot_1157-48206.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
            // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Devi",
          image:
            "https://img.freepik.com/free-photo/indian-ethnicity-happy-woman-portrait_53876-153598.jpg?size=626&ext=jpg&ga=GA1.1.974838269.1677851261&semt=ais",
          chatlog: [],
        },
      ],
    },
  };