export async function getStaticProps(context) {
	return {
		redirect: {
			destination: '/',
			permanent: true,
		},
	};
}