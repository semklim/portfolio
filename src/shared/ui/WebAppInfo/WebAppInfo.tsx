import WebApp from '@twa-dev/sdk';
import './WebAppInfo.scss';
interface WebAppInfoProps {
  className?: string;
  data: typeof WebApp.initDataUnsafe;
}

export default function WebAppInfo(props: WebAppInfoProps) {
  const { className = '', data, ...otherProps } = props;

  return (
    <div className={`web-app-info ${className}`} {...otherProps}>
      <h2>Telegram Mini App Info</h2>

      <section className="section">
        <h3>Query</h3>
        <p>
          <strong>Query ID:</strong> {data.query_id || 'N/A'}
        </p>
        <p>
          <strong>Auth Date:</strong> {new Date(data.auth_date * 1000).toLocaleString()}
        </p>
        <p>
          <strong>Hash:</strong> {data.hash}
        </p>
      </section>

      {data.user && (
        <section className="section user-info">
          <h3>User Info</h3>
          <p>
            <strong>ID:</strong> {data.user.id}
          </p>
          <p>
            <strong>Username:</strong> {data.user.username || 'N/A'}
          </p>
          <p>
            <strong>Name:</strong> {data.user.first_name} {data.user.last_name || ''}
          </p>
          <p>
            <strong>Language:</strong> {data.user.language_code || 'N/A'}
          </p>
          <p>
            <strong>Premium:</strong> {data.user.is_premium ? 'Yes' : 'No'}
          </p>
          {data.user.photo_url && (
            <img src={data.user.photo_url} alt="User profile" className="user-photo" />
          )}
        </section>
      )}

      {data.receiver && (
        <section className="section receiver-info">
          <h3>Receiver Info</h3>
          <p>
            <strong>ID:</strong> {data.receiver.id}
          </p>
          <p>
            <strong>Username:</strong> {data.receiver.username || 'N/A'}
          </p>
          <p>
            <strong>Name:</strong> {data.receiver.first_name}{' '}
            {data.receiver.last_name || ''}
          </p>
          <p>
            <strong>Language:</strong> {data.receiver.language_code || 'N/A'}
          </p>
          <p>
            <strong>Premium:</strong> {data.receiver.is_premium ? 'Yes' : 'No'}
          </p>
          {data.receiver.photo_url && (
            <img
              src={data.receiver.photo_url}
              alt="Receiver profile"
              className="receiver-photo"
            />
          )}
        </section>
      )}

      {data.chat && (
        <section className="section chat-info">
          <h3>Chat Info</h3>
          <p>
            <strong>ID:</strong> {data.chat.id}
          </p>
          <p>
            <strong>Title:</strong> {data.chat.title || 'N/A'}
          </p>
          <p>
            <strong>Type:</strong> {data.chat.type}
          </p>
          <p>
            <strong>Username:</strong> {data.chat.username || 'N/A'}
          </p>
          {data.chat.photo_url && (
            <img src={data.chat.photo_url} alt="Chat photo" className="chat-photo" />
          )}
        </section>
      )}

      <section className="section">
        <h3>Additional Info</h3>
        <p>
          <strong>Start Param:</strong> {data.start_param || 'N/A'}
        </p>
        <p>
          <strong>Chat Type:</strong> {data.chat_type || 'N/A'}
        </p>
        <p>
          <strong>Chat Instance:</strong> {data.chat_instance || 'N/A'}
        </p>
        <p>
          <strong>Can Send After:</strong>{' '}
          {data.can_send_after
            ? new Date(data.can_send_after * 1000).toLocaleString()
            : 'N/A'}
        </p>
      </section>
    </div>
  );
}
