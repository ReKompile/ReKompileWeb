import Link from 'next/link'

export default function Privacy() {
    return (
        
		<div className='container mx-auto px-24 py-8'>
			<h1 className='text-4xl font-bold mb-8'>
				SABA Prayer Times Chrome Extension Privacy Policy
			</h1>
			<p className='text-gray-600 mb-8'>Last Updated: May 6, 2023</p>
			<h2 className='text-2xl font-bold mb-4'>Introduction</h2>
			<p className='mb-4'>
				This Privacy Policy outlines how the SABA Prayer Times Chrome
				Extension (hereinafter referred to as {'"'}SABA Prayer Times
				{'"'}, {'"'}we{'"'}, {'"'}us{'"'}, or {'"'}our{'"'}) collects,
				uses, and protects your personal information when using the
				extension. We are committed to safeguarding your privacy and
				ensuring that your personal information remains secure.
			</p>
			<p className='mb-8'>
				By using SABA Prayer Times, you agree to the collection and use
				of your personal information in accordance with this Privacy
				Policy. If you do not agree with any part of this Privacy
				Policy, please do not use our extension.
			</p>
			<h2 className='text-2xl font-bold mb-4'>Information We Collect</h2>
			<p className='mb-4'>
				To provide you with accurate prayer times based on your
				location, we only collect the following information:
			</p>
			<ol className='list-decimal mb-8 ml-6'>
				<li className='mb-2'>
					Your current location data: We use your device{"'"}s IP
					address or browser geolocation information to determine your
					current location. This data is only used to calculate the
					prayer times for your specific location and is not stored,
					shared, or used for any other purpose.
				</li>
			</ol>
			<h2 className='text-2xl font-bold mb-4'>
				How We Use Your Information
			</h2>
			<p className='mb-8'>
				We use the collected information solely for the purpose of
				providing you with accurate prayer times based on your location.
				The information is not used for any other purpose, nor is it
				shared with any third parties.
			</p>
			<h2 className='text-2xl font-bold mb-4'>Data Retention</h2>
			<p className='mb-8'>
				SABA Prayer Times does not store any personal information. Your
				location data is only used temporarily to determine the prayer
				times for your specific location, and it is not saved on our
				servers or shared with any third parties.
			</p>
			<h2 className='text-2xl font-bold mb-4'>Data Security</h2>
			<p className='mb-8'>
				We are committed to ensuring that your information is secure. To
				prevent unauthorized access or disclosure, we have put in place
				suitable physical, electronic, and managerial procedures to
				safeguard and secure the information we collect.
			</p>
			<h2 className='text-2xl font-bold mb-4'>
				Changes to This Privacy Policy
			</h2>

			<div className='mb-4'>
				We may update our Privacy Policy from time to time. You are
				advised to review this Privacy Policy periodically for any
				changes.
			</div>
			<h2 className='text-2xl font-bold mb-4'>Contact Us</h2>
			<p className='mb-4'>
				If you have any questions or concerns about this Privacy Policy,
				please{' '}
				<Link href='/contact-us'>
					<a
						style={{
							color: 'blue',
							textDecoration: 'underline',
							fontWeight: 'bold',
						}}
					>
						contact us
					</a>
                </Link>
                .
			</p>
		</div>
	)
}
