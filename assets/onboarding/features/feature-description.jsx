import { __ } from '@wordpress/i18n';
import { logLink } from '../log-event';

/**
 * Feature description component
 *
 * @param {Object} props
 * @param {string} props.slug    Feature slug.
 * @param {string} props.excerpt Feature excerpt.
 * @param {string} [props.link]  Feature link.
 */
const FeatureDescription = ( { slug, excerpt, link } ) => (
	<>
		{ excerpt }
		{ link && (
			<>
				{ ' ' }
				<a
					className="sensei-onboarding__learn-more"
					href={ link }
					target="_blank"
					rel="noopener noreferrer"
					{ ...logLink( 'setup_wizard_features_learn_more', {
						slug,
					} ) }
				>
					{ __( 'Learn more', 'sensei-lms' ) }
				</a>
			</>
		) }
	</>
);

export default FeatureDescription;
