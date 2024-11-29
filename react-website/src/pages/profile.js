    import React, { useState, useContext, useEffect } from 'react';
    import { UserContext } from '../components/Navbar/UserContext';
    import styled from 'styled-components';
    import '../UserProfile.css';
    import { useNavigate } from 'react-router-dom';
    // import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
    import "@fortawesome/fontawesome-free/css/all.min.css";



    // Profile Card Styles
    const ProfileCard = styled.div`
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      width: 300px;
    `;

    const ProfileImageWrapper = styled.div`
      position: relative;
      width: 150px;
      height: 150px;
      margin: 0 auto; /* Centers the image horizontally */
    `;

    const ProfileImage = styled.img`
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover; /* Ensures the image covers the circle properly */
      border: 2px solid #ddd; /* Optional: Add a border around the circle */
    `;

    const CameraIcon = styled.div`
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #fff;
      border-radius: 50%;
      padding: 5px;
      font-size: 18px;
      cursor: pointer;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Adds a subtle shadow to the icon */
      
      &:hover {
        background-color: #f0f0f0;
      }
    `;

    const ProfileName = styled.h2`
      font-size: 24px;
      font-weight: bold;
      margin-top: 10px;
    `;

    const ProfileTitle = styled.p`
      font-size: 14px;
      color: #888;
    `;

    const Stats = styled.div`
      margin-top: 20px;
    `;

    const StatText = styled.p`
      font-size: 14px;
      color: #555;

      span {
        font-weight: bold;
      }

      .orange {
        color: orange;
      }

      .green {
        color: green;
      }

      .gray {
        color: gray;
      }
    `;

    const ProfileButton = styled.button`
      margin-top: 20px;
      padding: 10px;
      background-color: #f0f0f0;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    `;

    const ProfileLink = styled.a`
      display: block;
      margin-top: 10px;
      text-decoration: none;
      color: #007bff;
    `;

    // Profile Form and Settings Styles
    const ProfileContainer = styled.div`
      padding: 20px;
      max-width: 600px;
      margin: auto;
      background-color: #f7f7f7;
      border-radius: 8px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    `;

    const Label = styled.label`
      font-size: 14px;
      color: #666;
    `;

    const Input = styled.input`
      width: 100%;
      padding: 8px;
      margin: 10px 0;
      border: 1px solid #ccc;
      border-radius: 4px;
    `;

    const Button = styled.button`
      background-color: #4d4dff;  
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 10px;

      &:hover {
        background-color: #3b3bff;
      }
    `;

    // Main UserProfile Component
    const UserProfile = () => {
      const { loggedInUser } = useContext(UserContext);
      const [isEditing, setIsEditing] = useState(false);
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [bio, setBio] = useState('');
      
      const navigate = useNavigate();

      useEffect(() => {
        // Load user data from local storage
        const storedUser = JSON.parse(localStorage.getItem('userProfile')) || {};
        setUsername(storedUser.username || loggedInUser || '');
        setEmail(storedUser.email || '');
        setBio(storedUser.bio || '');
      }, [loggedInUser]);

      const handleEdit = () => setIsEditing(true);

      const handleSave = () => {
        const userProfile = { username, email, bio };
        localStorage.setItem('userProfile', JSON.stringify(userProfile)); // Save to local storage
        setIsEditing(false);
      };

      const handleLogout = () => {
        localStorage.removeItem('token'); // Remove authentication data
        navigate('/login'); // Use navigate here for redirection
      };

      return (
        <div className="account-settings" style={{ marginTop: '80px' }}> {/* Add marginTop here */}
          <aside className={`sidebar`}>
            <h2 className="sidebar-header">Account Settings</h2>
            <nav>
              <ul>
                <li>
                  <a href="/YourServices"><i className="icon-services"></i>Your Services</a>
                </li>
                <li>
                <a href="/Chatbot">
      <i className="fas fa-question-circle"></i> Help and Support
    </a>


                </li>
                <li>
                  <a href="/" onClick={handleLogout}><i className="icon-logout"></i>LogOut</a>
                </li>
              </ul>
            </nav>
          </aside>
          <main className="main-content">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              {/* Profile Card */}
              <ProfileCard>
                <ProfileImageWrapper>
                  <ProfileImage
                    src="https://cdn-icons-png.freepik.com/256/4140/4140048.png?ga=GA1.1.1458070608.1716824623&semt=ais_hybrid"
                    alt="Profile"
                  />
                  <CameraIcon>📷</CameraIcon>
                </ProfileImageWrapper>
                <ProfileName>{username}</ProfileName>
                <ProfileTitle>{bio}</ProfileTitle>
                <Stats>
                  <StatText>Service Taken: <span className="orange">2</span></StatText>
                  <StatText>Services completed <span className="green">1</span></StatText>
                </Stats>
              </ProfileCard>

              {/* Profile Form */}
              <ProfileContainer>
                <ProfileTitle>User Profile</ProfileTitle>
                <Label>Username</Label>
                <Input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  readOnly={!isEditing}
                />
                <Label>Email</Label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  readOnly={!isEditing}
                />
                <Label>Bio</Label>
                <Input
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  readOnly={!isEditing}
                />
                {isEditing ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <Button onClick={handleEdit}>Edit</Button>
                )}
              </ProfileContainer>
            </div>
          </main>
        </div>
      );
    };

    export default UserProfile;
