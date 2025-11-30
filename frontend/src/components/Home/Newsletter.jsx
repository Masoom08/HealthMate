import React,{useState} from 'react';

const Newsletter = ()=> {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (email) {
            alert('Thank you for subscribing!');
            setEmail('');
        }
    };

    return (
      <section className="bg-white px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-bold mb-2" style={{ color: '#FF7B6E' }}>Newsletter</p>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">JOIN US</h2>
          <p className="text-gray-600 mb-12 ml-50 mr-50 max-w-2xl mx-auto text-sm">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics
          </p>
          
          <div className="ml-30 flex" style = {{width: '688px',height: '58px'}}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="flex-1 px-6 py-4 border border-gray-300  focus:outline-none text-gray-900"
              style={{boxShadow: 'none',width: '588px',height: '50px',borderRight: 'none',  }}
              onFocus={(e) => e.target.style.outline = `2px solid #FF7B6E`}
              onBlur={(e) => e.target.style.outline = 'none'}
            />
            <button
              onClick={handleSubscribe}
              className="text-white px-6 py-4  font-medium transition-colors"
              style={{ backgroundColor: '#FF7B6E',width: '100',height: '50px'  }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#FF6B5E'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#FF7B6E'}
            >
              Subscribe
            </button>
          </div>
        </div>
      </section> 
    );
};

export default Newsletter;