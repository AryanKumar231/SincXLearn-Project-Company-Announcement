// Importing necessary libraries and components
import { useState } from 'react';
import { useNavigate } from 'react-router';

// Importing rich text editor 
import { Editor } from '@tinymce/tinymce-react';


// Create Announcement component
const CreateAnoun = () => {

    // State variables for announcement details
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    // initialize navigate for redirection
    const navigate = useNavigate();


    // Function to handle form submission
    const handleSubmit = async (e) => {

        // Prevent default form submission
        e.preventDefault();

        const announcementData = {
            title,
            category,
            description,
        };

        // Sending POST request to create announcement        
        try {
            const res = await fetch("http://localhost:5000/api/create-announcement", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(announcementData),
            });

            // Parse the JSON response
            await res.json();

            // Redirect to announcements page or show success message
            navigate('/');

        } catch (err) {
            console.error("Error creating announcement:", err);
        }

    };

    return (
        <div>
            {/* Page Title */}
            <h1 className='lg:text-4xl text-xl font-semibold mt-4 ml-2'>Create Announcements</h1>

            {/* Form for creating announcement */}
            <form onSubmit={handleSubmit} className='flex flex-col lg:w-full lg:max-w-md lg:mt-12 mt-4 gap-4 lg:ml-2 w-72'>
                {/* Title Input */}
                <input
                    type="text"
                    className='border border-gray-300 rounded p-2'
                    placeholder='Enter announcement title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                {/* Category Select */}
                <select
                    className='border border-gray-300 rounded p-2'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="">Select category</option>
                    <option value="policy">Policy Update</option>
                    <option value="compliance">Compliance Alert</option>
                    <option value="it">IT Notice</option>
                    <option value="event">Event Notification</option>
                </select>

                {/* Rich Text Editor */}
                <Editor
                    apiKey='ujzrj1xu36igv40p0daib2tzsfovy8ask34d5nfjw06c5rf8' // Replace with your own TinyMCE API key. I'm using it without env variable for simplicity
                    initialValue="<p>Write your announcement here...</p>"
                    value={description}
                    onEditorChange={(newContent) => setDescription(newContent)}
                    init={{
                        height: 300,
                        menubar: false,
                        plugins: [
                            'link',
                            'lists',
                            'textcolor',
                            'advlist'
                        ],
                        toolbar:
                            'undo redo | bold italic underline | forecolor backcolor | bullist numlist | outdent indent | link',
                        branding: false,
                        default_link_target: '_blank',
                    }}
                />

                {/* Submit Button */}
                <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'>
                    Create Announcement
                </button>
            </form>
        </div>
    );
};

export default CreateAnoun;
