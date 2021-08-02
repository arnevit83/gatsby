import "/src/assets/css/nucleo-svg.css";
import "/src/assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "/src/assets/scss/argon-design-system.scss?v1.0.0";
import "/src/assets/scss/all.sass";

export const onServiceWorkerUpdateReady = () => {
	const answer = window.confirm(
		`This application has been updated. ` +
			`Reload to display the latest version?`
	);
	if (answer === true) {
		window.location.reload();
	}
};
