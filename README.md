
# Netflix GPT
# For built form you have to use  formik.org  this is a react library.

- Create React App
- Configured TailwindCSS
- Header.
- Routing of App
- Login Form 
- Sign Up form.
- Form validation.
- useRef Hook
- Firebase Setup
- Deploying our app to production.
- create a sign-up user Account.

# Sign Up form
  -How can you create a reusable form component and toggle between Sign In and Sign Up modes. Here's how:
     1. Add state to toggle between Sign In and Sign Up

      # Explanation of Toggle Function:
       2. What is useState?
        - useState is a React Hook that lets you add state    (data  that can change) to your component.

        # const [isSignInForm, setIsSignInForm] = useState(true);
         Breaking it down:

        isSignInForm - A variable that holds the current state (true or false)
        setIsSignInForm - A function to update that state
        useState(true) - Initial value is true (starts as Sign In form)
# const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
};

This function switches between two states:

If isSignInForm is true → it becomes false
If isSignInForm is false → it becomes true
The ! operator means "NOT" - it flips the boolean value.
   
   

# Features
-Login / Sign up
    - Sign In / Sign up Force
    - redirect to Browse Page

- Browse ( After authentication)
     - Header
     - Main Movie
          - Tailer in Background
          - Title & Description
          - MovieSuggestions
                -MovieList * N

- NetfilxGPT
      - Search Bar. 
      - Movie Suggestions.
