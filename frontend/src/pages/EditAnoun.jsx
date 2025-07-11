// Importing necessary libraries and components
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Importing rich text editor
import { Editor } from '@tinymce/tinymce-react';


// Edit Announcement component
const EditAnoun = () => {
    // Extracting the announcement ID from the URL parameters
    const { id } = useParams();

    // State variables for announcement details
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('policy');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(true);

    // Initialize navigate for redirection
    const navigate = useNavigate();

    // Fetching the announcement details
    useEffect(() => {

        // Function to fetch announcement details by ID
        const fetchAnnouncement = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/get-announcement/${id}`);
                
                // Check if the response is ok
                if (!response.ok) throw new Error('Failed to fetch announcement');
                const data = await response.json();

                // Set the state with fetched data
                setTitle(data.title);
                
                // Set the description
                setDescription(data.description);
                
                // Set category based on the fetched data
                switch (data.category) {
                    case 'Privacy Policy':
                        setCategory('policy');
                        break;
                    case 'Compliance Alert':
                        setCategory('compliance');
                        break;
                    case 'IT Department':
                        setCategory('it');
                        break;
                    case 'Event Notification':
                        setCategory('event');
                        break;
                }

            } catch (error) {
                console.error(error);
            } finally {
                // Set loading to false after fetching
                setLoading(false);
            }
        };

        // Call the fetch function
        fetchAnnouncement();
    }, [id]); // Reflect when id change


    // Function to handle form submission
    const handleSubmit = async (e) => {

        // Prevent default form submission
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/api/update-announcement/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title,
                    category,
                    description,
                }),
            });

            // Check if the response is ok
            if (!response.ok) throw new Error('Failed to update announcement');
            
            // navigate to the announcements page after successful update
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    };

    // If loading, show a loading message
    if (loading) return <div>Loading...</div>;


    // Render the edit announcement form
    return (
        <div>
            {/* Page Title */}
            <h1 className='text-4xl font-semibold mt-4 ml-2'>Edit Announcement</h1>

            {/* Form for editing announcement */}
            <form onSubmit={handleSubmit} className='flex flex-col w-full max-w-md mt-12 gap-4 ml-2'>

                {/* Title Input */}
                <input
                    type="text"
                    className='border border-gray-300 rounded p-2'
                    placeholder='Enter announcement title...'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                {/* Category Selection */}
                <select
                    className='border border-gray-300 rounded p-2'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                >
                    <option value="policy">Policy Update</option>
                    <option value="compliance">Compliance Alert</option>
                    <option value="it">IT Notice</option>
                    <option value="event">Event Notification</option>
                </select>

                {/* Rich Text Editor for Description */}
                <Editor
                    apiKey='ujzrj1xu36igv40p0daib2tzsfovy8ask34d5nfjw06c5rf8'
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
                    Update Announcement
                </button>
            </form>
        </div>
    );
};

export default EditAnoun;
